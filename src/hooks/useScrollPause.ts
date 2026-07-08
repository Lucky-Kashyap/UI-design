import { useEffect, useState } from 'react';

type ScrollPauseState = {
  scrollY: number;
  isPaused: boolean;
  scrolledPast: boolean;
  showTopBar: boolean;
};

export const useScrollPause = (threshold = 80, pauseMs = 220): ScrollPauseState => {
  const [scrollY, setScrollY] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let timeout: number | undefined;

    const onScroll = () => {
      setScrollY(window.scrollY);
      setIsPaused(false);
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => setIsPaused(true), pauseMs);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeout) window.clearTimeout(timeout);
    };
  }, [pauseMs]);

  const scrolledPast = scrollY > threshold;
  const showTopBar = scrolledPast && isPaused;

  return { scrollY, isPaused, scrolledPast, showTopBar };
};
