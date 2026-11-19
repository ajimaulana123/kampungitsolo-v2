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

async function mountPlayer() {
  await act(async () => triggerIntersection(true));
  const player = FakePlayer.instances[0];
  if (!player) throw new Error("YouTube player was not created");
  return player;
}

async function mountAndReady() {
  const player = await mountPlayer();
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
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("autoplays the profile video with sound when the frame scrolls into view", async () => {
    render(<AboutVideo />);

    expect(screen.getByRole("group", { name: /video profil/i })).toBeInTheDocument();
    expect(FakePlayer.instances).toHaveLength(0);

    const player = await mountAndReady();

    expect(player.options.videoId).toBe("PX4DT_A9UVU");
    expect(player.unMute).toHaveBeenCalled();
    expect(player.playVideo).toHaveBeenCalled();
    expect(player.mute).not.toHaveBeenCalled();
  });

  it("falls back to muted autoplay when the browser blocks playback with sound", async () => {
    vi.useFakeTimers();
    render(<AboutVideo />);

    const player = await mountPlayer();

    // CUED: browser menolak autoplay bersuara sehingga video belum berjalan.
    player.getPlayerState = vi.fn(() => 5);
    act(() => player.ready());
    act(() => vi.advanceTimersByTime(700));

    expect(player.mute).toHaveBeenCalled();
    expect(player.playVideo).toHaveBeenCalledTimes(2);
  });

  it("pauses outside the viewport and lets people pause or toggle sound", async () => {
    render(<AboutVideo />);
    const player = await mountAndReady();

    act(() => triggerIntersection(false));
    expect(player.pauseVideo).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: /bisukan video/i }));
    expect(player.mute).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: /aktifkan suara/i }));
    expect(player.unMute).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: /putar video profil/i }));
    expect(player.playVideo).toHaveBeenCalled();
  });

  it("offers a fullscreen button that falls back to YouTube when unsupported", async () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<AboutVideo />);
    await mountAndReady();

    fireEvent.click(screen.getByRole("button", { name: /lihat video layar penuh/i }));

    expect(open).toHaveBeenCalledWith(
      "https://www.youtube.com/watch?v=PX4DT_A9UVU",
      "_blank",
      "noopener,noreferrer",
    );
  });

  it("waits for a click when reduced motion is preferred", async () => {
    prefersReducedMotion();
    render(<AboutVideo />);

    const player = await mountAndReady();

    expect(player.playVideo).not.toHaveBeenCalled();
    expect(player.mute).not.toHaveBeenCalled();
    expect(player.unMute).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: /putar video profil/i }));
    expect(player.playVideo).toHaveBeenCalled();
  });
});
