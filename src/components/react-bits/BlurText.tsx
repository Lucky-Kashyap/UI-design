import { motion, useReducedMotion } from 'framer-motion';

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

const BlurText = ({ text, className, delay = 0 }: BlurTextProps) => {
  const reduce = useReducedMotion() ?? false;

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, filter: 'blur(12px)', y: 8 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  );
};

export default BlurText;
