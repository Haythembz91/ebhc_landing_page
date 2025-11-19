"use client";
import { useEffect } from "react";

export default function MomentumScroll() {
  useEffect(() => {
    let velocity = 0;
    let isTicking = false;

    const friction = 0.99;   // smoother, slightly longer glide
    const multiplier = 0.1; // a little more push per wheel move
    const maxStep = 1.5;      // increased scroll distance (but still controlled)

    const wheelHandler = (e) => {
      e.preventDefault();

      let delta = e.deltaY * multiplier;

      // limit maximum scroll movement
      delta = Math.max(-maxStep, Math.min(maxStep, delta));

      velocity += delta;

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(loop);
      }
    };

    const loop = () => {
      window.scrollBy(0, velocity);
      velocity *= friction;

      if (Math.abs(velocity) > 0.05) {
        requestAnimationFrame(loop);
      } else {
        isTicking = false;
        velocity = 0;
      }
    };

    window.addEventListener("wheel", wheelHandler, { passive: false });

    return () => window.removeEventListener("wheel", wheelHandler);
  }, []);

  return null;
}