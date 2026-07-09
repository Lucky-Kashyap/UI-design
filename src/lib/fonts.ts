import { Fraunces, Outfit } from 'next/font/google';

export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-fraunces',
  adjustFontFallback: true,
});

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
  adjustFontFallback: true,
});

export const fontVariables = `${fraunces.variable} ${outfit.variable}`;
