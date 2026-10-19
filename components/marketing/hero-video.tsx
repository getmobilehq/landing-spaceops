'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Background footage for the night hero (design system v3 VideoHero):
 * muted, looped, inline, with a legibility scrim and a pause control.
 * Honours prefers-reduced-motion by staying on the poster frame. The
 * hero's blueprint grid remains underneath as the fallback.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    video
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, []);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setPlaying(true));
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      {/* Confined to the first screen of the hero: stretched over the whole
          (tall) hero the 16:9 footage zooms in too far. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[min(100svh,960px)]" aria-hidden="true">
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          src="/media/hero.mp4"
          poster="/media/hero-poster.jpg"
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />
        {/* Scrim: heaviest behind the left-aligned copy, fading to night at
          the bottom where the dashboard card sits. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, #0A0A0A 0%, rgba(10,10,10,0.7) 35%, rgba(10,10,10,0) 70%), linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.72) 50%, rgba(10,10,10,0.5) 100%)',
          }}
        />
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause background video' : 'Play background video'}
        className="absolute right-[clamp(20px,4vw,40px)] top-6 z-10 grid h-10 w-10 place-items-center rounded border border-[rgba(250,250,247,0.32)] text-night-fg transition-colors duration-200 hover:border-night-fg"
      >
        {playing ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            aria-hidden="true"
          >
            <path d="M8 5v14M16 5v14" />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="miter"
            aria-hidden="true"
          >
            <path d="M7 4v16l13-8z" />
          </svg>
        )}
      </button>
    </>
  );
}
