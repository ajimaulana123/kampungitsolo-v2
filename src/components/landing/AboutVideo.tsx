import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const VIDEO_ID = "PX4DT_A9UVU";
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const POSTER_URL = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const POSTER_FALLBACK_URL = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

type PlayerEvent = { target: Player; data: number };

type Player = {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  getPlayerState: () => number;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy: () => void;
};

type PlayerOptions = {
  videoId: string;
  width: string;
  height: string;
  host: string;
  playerVars: Record<string, number | string>;
  events: {
    onReady: (event: PlayerEvent) => void;
    onStateChange: (event: PlayerEvent) => void;
  };
};

type YouTubeApi = {
  Player: new (element: HTMLElement, options: PlayerOptions) => Player;
  PlayerState: {
    PLAYING: number;
    PAUSED: number;
    ENDED: number;
    BUFFERING: number;
    CUED: number;
  };
};

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<YouTubeApi> | null = null;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);

  if (!youtubeApiPromise) {
    youtubeApiPromise = new Promise<YouTubeApi>((resolve, reject) => {
      const previousReady = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        if (window.YT?.Player) resolve(window.YT);
        else reject(new Error("YouTube IFrame API did not initialise"));
      };

      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => reject(new Error("YouTube IFrame API failed to load"));
      document.head.appendChild(script);
    });
  }

  return youtubeApiPromise;
}

export function AboutVideo() {
  const frameRef = useRef<HTMLDivElement>(null);
  const playerHostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const inViewRef = useRef(false);
  const userPausedRef = useRef(false);
  const autoPausedRef = useRef(false);
  const reduceMotionRef = useRef(false);

  const [shouldMount, setShouldMount] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    reduceMotionRef.current =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    if (typeof IntersectionObserver === "undefined") {
      inViewRef.current = true;
      setShouldMount(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        inViewRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          setShouldMount(true);
          if (autoPausedRef.current && !userPausedRef.current) {
            autoPausedRef.current = false;
            playerRef.current?.playVideo();
          }
        } else {
          autoPausedRef.current = true;
          playerRef.current?.pauseVideo();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldMount) return;

    const host = playerHostRef.current;
    if (!host) return;

    let cancelled = false;
    let player: Player | null = null;
    const mountTarget = document.createElement("div");
    mountTarget.className = "size-full";
    host.replaceChildren(mountTarget);

    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return;

        player = new YT.Player(mountTarget, {
          videoId: VIDEO_ID,
          width: "100%",
          height: "100%",
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              playerRef.current = event.target;
              setReady(true);

              if (!reduceMotionRef.current && inViewRef.current) {
                event.target.mute();
                setMuted(true);
                event.target.playVideo();
              }
            },
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.PLAYING) {
                setPlaying(true);
                userPausedRef.current = false;
                autoPausedRef.current = false;
              } else if (
                event.data === YT.PlayerState.PAUSED ||
                event.data === YT.PlayerState.ENDED
              ) {
                setPlaying(false);
              }
            },
          },
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      playerRef.current = null;
      player?.destroy();
      host.replaceChildren();
    };
  }, [shouldMount]);

  const play = () => {
    const player = playerRef.current;
    if (!player) return;

    userPausedRef.current = false;
    if (player.getPlayerState() === 0) player.seekTo(0, true);
    player.playVideo();
  };

  const pause = () => {
    userPausedRef.current = true;
    playerRef.current?.pauseVideo();
  };

  const toggleMute = () => {
    const player = playerRef.current;
    if (!player) return;

    if (muted) {
      player.unMute();
      setMuted(false);
    } else {
      player.mute();
      setMuted(true);
    }
  };

  return (
    <div
      ref={frameRef}
      role="group"
      aria-label="Video profil Kampung IT Solo"
      className="relative aspect-video w-full overflow-hidden bg-navy"
    >
      <img
        src={POSTER_URL}
        onError={(event) => {
          event.currentTarget.src = POSTER_FALLBACK_URL;
        }}
        alt=""
        width={1280}
        height={720}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06141D]/85 via-[#06141D]/10 to-[#06141D]/20"
      />

      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500 [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:size-full [&>div]:size-full",
          ready ? "opacity-100" : "opacity-0",
        )}
      >
        <div ref={playerHostRef} className="size-full" />
      </div>

      {ready ? (
        <div
          aria-hidden="true"
          onClick={playing ? pause : play}
          className="absolute inset-0 z-10 cursor-pointer"
        />
      ) : null}

      {!playing && !failed ? (
        <span className="pointer-events-none absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full bg-[#06141D]/70 px-2.5 py-1 text-[0.58rem] font-extrabold uppercase tracking-[0.16em] text-white sm:right-5 sm:top-5">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-lime" />
          Video profil
        </span>
      ) : null}

      {ready && !playing ? (
        <button
          type="button"
          onClick={play}
          aria-label="Putar video profil"
          className="absolute left-1/2 top-1/2 z-30 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-forest shadow-card transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy motion-reduce:transition-none"
        >
          <Play className="size-5 translate-x-0.5 fill-current" aria-hidden="true" />
        </button>
      ) : null}

      {failed ? (
        <a
          href={WATCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 top-1/2 z-30 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-forest shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <Play className="size-3.5 fill-current" aria-hidden="true" />
          Tonton video
        </a>
      ) : null}

      {ready ? (
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center gap-2 px-5 pb-3.5 pt-10 sm:pb-4">
          <button
            type="button"
            onClick={playing ? pause : play}
            aria-label={playing ? "Jeda video" : "Putar video"}
            className="grid size-8 place-items-center rounded-full border border-white/20 bg-[#06141D]/70 text-white transition-colors duration-200 hover:bg-[#06141D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy motion-reduce:transition-none"
          >
            {playing ? (
              <Pause className="size-3.5 fill-current" aria-hidden="true" />
            ) : (
              <Play className="size-3.5 translate-x-px fill-current" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Aktifkan suara" : "Bisukan video"}
            className="grid size-8 place-items-center rounded-full border border-white/20 bg-[#06141D]/70 text-white transition-colors duration-200 hover:bg-[#06141D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy motion-reduce:transition-none"
          >
            {muted ? (
              <VolumeX className="size-3.5" aria-hidden="true" />
            ) : (
              <Volume2 className="size-3.5" aria-hidden="true" />
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
}
