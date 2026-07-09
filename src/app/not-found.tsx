import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-tg-deep px-4 text-center text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tg-cyan">404</p>
      <h1 className="mt-4 font-display text-headline-xl">Page not found</h1>
      <p className="mt-4 max-w-md text-white/70">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="rounded-tg-pill bg-white px-6 py-3 text-sm font-semibold text-tg-navy">
          Back to home
        </Link>
        <Link href="/themes" className="rounded-tg-pill border border-white/30 px-6 py-3 text-sm font-semibold text-white">
          Theme gallery
        </Link>
      </div>
    </div>
  );
}
