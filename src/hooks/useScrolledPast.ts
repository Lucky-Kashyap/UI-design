import { useEffect, useState } from 'react';
import { getScrollY, subscribeScroll } from '@/lib/scroll';

export const useScrolledPast = (threshold = 48): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = getScrollY() > threshold;
      setScrolled((prev) => (prev === next ? prev : next));
    };

    onScroll();
    const unsubscribe = subscribeScroll(onScroll);
    return unsubscribe;
  }, [threshold]);

  return scrolled;
};
