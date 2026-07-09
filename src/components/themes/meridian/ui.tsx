'use client';

import { useState, type ImgHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './meridian.css';

type ThemeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackClassName?: string;
};

export const MeridianThemeStyles = () => null;

export const MeridianImage = ({
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
        className={cn('md-img-fallback h-full w-full', fallbackClassName, className)}
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

export const MeridianSection = ({ id, className, children, ...rest }: SectionProps) => (
  <section id={id} className={cn('md-section', className)} {...rest}>
    {children}
  </section>
);

export const MeridianContainer = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn('md-container min-w-0', className)}>{children}</div>
);

export const MeridianEyebrow = ({ className, children }: { className?: string; children: ReactNode }) => (
  <p className={cn('md-eyebrow', className)}>{children}</p>
);

export const MeridianH2 = ({ id, className, children }: { id?: string; className?: string; children: ReactNode }) => (
  <h2 id={id} className={cn('md-h2 text-tg-ink', className)}>
    {children}
  </h2>
);

export const MeridianH3 = ({ className, children }: { className?: string; children: ReactNode }) => (
  <h3 className={cn('md-h3 text-tg-ink', className)}>{children}</h3>
);

export const MeridianBody = ({ className, children }: { className?: string; children: ReactNode }) => (
  <p className={cn('md-body text-tg-muted', className)}>{children}</p>
);
