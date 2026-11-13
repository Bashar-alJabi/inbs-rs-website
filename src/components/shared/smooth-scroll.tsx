'use client';

import { useEffect } from 'react';

/** Optional enhancement only on fine-pointer devices with motion enabled. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        window.matchMedia('(pointer: coarse)').matches) return;

    let active = true;
    let frame = 0;
    let destroy: (() => void) | undefined;

    import('lenis').then(({ default: Lenis }) => {
      if (!active) return;
      const lenis = new Lenis({ duration: 1.1, autoRaf: false });
      const loop = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
      destroy = () => { cancelAnimationFrame(frame); lenis.destroy(); };
    });

    return () => { active = false; cancelAnimationFrame(frame); destroy?.(); };
  }, []);
  return null;
}
