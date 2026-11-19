import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { AboutVideo } from "./AboutVideo";

type PlayerOptions = {
  videoId: string;
  events?: {
    onReady?: (event: { target: FakePlayer }) => void;
    onStateChange?: (event: { target: FakePlayer; data: number }) => void;
  };
};

class FakePlayer {
  static instances: FakePlayer[] = [];

  options: PlayerOptions;

  constructor(_element: HTMLElement, options: PlayerOptions) {
    this.options = options;
    FakePlayer.instances.push(this);
  }

  playVideo = vi.fn(() => this.emitState(1));
  pauseVideo = vi.fn(() => this.emitState(2));
  mute = vi.fn();
  unMute = vi.fn();
  getPlayerState = vi.fn(() => 1);
  seekTo = vi.fn();
  destroy = vi.fn();

  ready() {
    this.options.events?.onReady?.({ target: this });
  }

  private emitState(data: number) {
    this.options.events?.onStateChange?.({ target: this, data });
  }
}

let triggerIntersection: (isIntersecting: boolean) => void;

class MockIntersectionObserver {
  root = null;
  rootMargin = "";
  thresholds = [];

  constructor(callback: IntersectionObserverCallback) {
    triggerIntersection = (isIntersecting) => {
      callback(
        [{ isIntersecting } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      );
    };
  }

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

function prefersReducedMotion() {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

async function mountAndReady() {
  act(() => triggerIntersection(true));
  await waitFor(() => expect(FakePlayer.instances).toHaveLength(1));

  const player = FakePlayer.instances[0];
  act(() => player.ready());
  return player;
}

describe("About video", () => {
  beforeEach(() => {
    FakePlayer.instances = [];
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    window.YT = {
      Player: FakePlayer,
      PlayerState: { PLAYING: 1, PAUSED: 2, ENDED: 0, BUFFERING: 3, CUED: 5 },
    } as unknown as NonNullable<Window["YT"]>;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("autoplays the profile video muted when the frame scrolls into view", async () => {
    render(<AboutVideo />);

    expect(screen.getByRole("group", { name: /video profil/i })).toBeInTheDocument();
    expect(FakePlayer.instances).toHaveLength(0);

    const player = await mountAndReady();

    expect(player.options.videoId).toBe("PX4DT_A9UVU");
    expect(player.mute).toHaveBeenCalled();
    expect(player.playVideo).toHaveBeenCalled();
  });

  it("pauses outside the viewport and lets people pause or enable sound", async () => {
    render(<AboutVideo />);
    const player = await mountAndReady();

    act(() => triggerIntersection(false));
    expect(player.pauseVideo).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: /aktifkan suara/i }));
    expect(player.unMute).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: /putar video profil/i }));
    expect(player.playVideo).toHaveBeenCalled();
  });

  it("waits for a click when reduced motion is preferred", async () => {
    prefersReducedMotion();
    render(<AboutVideo />);

    const player = await mountAndReady();

    expect(player.playVideo).not.toHaveBeenCalled();
    expect(player.mute).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: /putar video profil/i }));
    expect(player.playVideo).toHaveBeenCalled();
  });
});
