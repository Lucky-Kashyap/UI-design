'use client';

import { useState, type ImgHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './horizon.css';

type ThemeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackClassName?: string;
};

export const HorizonThemeStyles = () => null;

export const HorizonImage = ({
  className,
  fallbackClassName,
  alt,
  onError,
  ...props
}: ThemeImageProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn('hz-img-fallback h-full w-full', fallbackClassName, className)}
        role="img"
        aria-label={alt ?? 'Image placeholder'}
      />
    );
  }

  return (
    <img
      {...props}
      alt={alt ?? ''}
      className={className}
      onError={(event) => {
        setFailed(true);
        onError?.(event);
      }}
    />
  );
};

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  'aria-labelledby'?: string;
};

export const HorizonSection = ({ id, className, children, ...rest }: SectionProps) => (
  <section id={id} className={cn('hz-section', className)} {...rest}>
    {children}
  </section>
);

export const HorizonContainer = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn('hz-container min-w-0', className)}>{children}</div>
);

export const HorizonEyebrow = ({ className, children }: { className?: string; children: ReactNode }) => (
  <p className={cn('hz-eyebrow', className)}>{children}</p>
);

export const HorizonH2 = ({ id, className, children }: { id?: string; className?: string; children: ReactNode }) => (
  <h2 id={id} className={cn('hz-h2 text-tg-ink', className)}>
    {children}
  </h2>
);

export const HorizonH3 = ({ className, children }: { className?: string; children: ReactNode }) => (
  <h3 className={cn('hz-h3 text-tg-ink', className)}>{children}</h3>
);

export const HorizonBody = ({ className, children }: { className?: string; children: ReactNode }) => (
  <p className={cn('hz-body text-tg-muted', className)}>{children}</p>
);
