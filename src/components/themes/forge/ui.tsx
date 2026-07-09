'use client';

import { useState, type ImgHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './forge.css';

type ThemeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackClassName?: string;
};

export const ForgeThemeStyles = () => null;

export const ForgeImage = ({
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
        className={cn('fg-img-fallback h-full w-full', fallbackClassName, className)}
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

export const ForgeSection = ({ id, className, children, ...rest }: SectionProps) => (
  <section id={id} className={cn('fg-section', className)} {...rest}>
    {children}
  </section>
);

export const ForgeContainer = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn('fg-container min-w-0', className)}>{children}</div>
);

export const ForgeEyebrow = ({ className, children }: { className?: string; children: ReactNode }) => (
  <p className={cn('fg-eyebrow', className)}>{children}</p>
);

export const ForgeH2 = ({ id, className, children }: { id?: string; className?: string; children: ReactNode }) => (
  <h2 id={id} className={cn('fg-h2 text-tg-ink', className)}>
    {children}
  </h2>
);

export const ForgeH3 = ({ className, children }: { className?: string; children: ReactNode }) => (
  <h3 className={cn('fg-h3 text-tg-ink', className)}>{children}</h3>
);

export const ForgeBody = ({ className, children }: { className?: string; children: ReactNode }) => (
  <p className={cn('fg-body text-tg-muted', className)}>{children}</p>
);
