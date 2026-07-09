'use client';

import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { DEFAULT_IMAGE_SIZES, publicImagePath } from '@/lib/images';

type LazyImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain';
};

const LazyImage = ({
  src,
  alt,
  width = 1200,
  height = 800,
  priority = false,
  fill = false,
  sizes = DEFAULT_IMAGE_SIZES,
  objectFit = 'cover',
  className,
  ...rest
}: LazyImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(priority);
  const resolved = publicImagePath(src);
  const fitClass = objectFit === 'cover' ? 'object-cover' : 'object-contain';
  const imageClassName = cn(fitClass, className);

  useEffect(() => {
    if (priority || visible) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [priority, visible]);

  if (priority) {
    if (fill) {
      return <Image src={resolved} alt={alt} fill priority sizes={sizes} className={imageClassName} />;
    }
    return (
      <Image
        src={resolved}
        alt={alt}
        width={width}
        height={height}
        priority
        sizes={sizes}
        className={imageClassName}
      />
    );
  }

  if (fill) {
    return (
      <div
        ref={ref}
        className={cn('relative h-full w-full overflow-hidden')}
        {...rest}
      >
        {!visible && <div className="absolute inset-0 animate-pulse bg-tg-soft" aria-hidden="true" />}
        {visible && (
          <Image
            src={resolved}
            alt={alt}
            fill
            sizes={sizes}
            className={cn(imageClassName, 'opacity-0 animate-fade-in')}
          />
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="relative inline-block w-fit max-w-full shrink-0 leading-none"
      {...rest}
    >
      {!visible && (
        <div
          className="animate-pulse bg-tg-soft"
          style={{ width: Math.round((width / height) * 36), height: 36 }}
          aria-hidden="true"
        />
      )}
      {visible && (
        <Image
          src={resolved}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={cn(imageClassName, 'opacity-0 animate-fade-in')}
        />
      )}
    </div>
  );
};

export default LazyImage;
