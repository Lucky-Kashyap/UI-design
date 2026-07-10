import { useEffect, useState } from 'react';
import { getScrollY, subscribeScroll } from '@/lib/scroll';

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
      const y = getScrollY();
      setScrollY((prev) => (prev === y ? prev : y));
      setIsPaused(false);
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => setIsPaused(true), pauseMs);
    };

    onScroll();
    const unsubscribe = subscribeScroll(onScroll);
    return () => {
      unsubscribe();
      if (timeout) window.clearTimeout(timeout);
    };
  }, [pauseMs]);

  const scrolledPast = scrollY > threshold;
  const showTopBar = scrolledPast && isPaused;

  return { scrollY, isPaused, scrolledPast, showTopBar };
};
