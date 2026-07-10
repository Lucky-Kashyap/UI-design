'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { getScrollY, scrollToTop, subscribeScroll } from '@/lib/scroll';

const SCROLL_THRESHOLD_PX = 450;

const ScrollToTop = () => {
  const reduce = useReducedMotion() ?? false;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = getScrollY() > SCROLL_THRESHOLD_PX;
      setVisible((prev) => (prev === next ? prev : next));
    };

    onScroll();
    const unsubscribe = subscribeScroll(onScroll);
    return unsubscribe;
  }, []);

  const handleScrollToTop = useCallback(() => {
    scrollToTop({ immediate: reduce });
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          className="tg-scroll-top"
          initial={reduce ? false : { opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Scroll to top of page"
        >
          <ChevronUp className="tg-scroll-top__icon" strokeWidth={2.25} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
