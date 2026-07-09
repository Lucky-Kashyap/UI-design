import type { Metadata } from 'next';
import Link from 'next/link';
import { THEME_LIST } from '@/themes/registry';
import { buildPreviewMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPreviewMetadata('Theme Gallery');

export default function ThemesPage() {
  return (
    <div className="min-h-screen bg-tg-deep text-white">
      <div className="tg-container py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tg-cyan">Client preview</p>
        <h1 className="mt-4 font-display text-headline-xl">Traditional Group — Theme Gallery</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Four distinct home page directions for review. Production default remains Prism Heritage at{' '}
          <Link href="/" className="text-tg-cyan underline underline-offset-4">
            /
          </Link>
          .
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {THEME_LIST.map((theme) => (
            <Link
              key={theme.id}
              href={`/themes/${theme.id}`}
              className="group relative overflow-hidden rounded-tg-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-tg-cyan/40 hover:bg-white/10"
            >
              <div className="mb-4 h-1 w-16 rounded-full bg-prism-band opacity-80" style={{ backgroundImage: theme.gradient }} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl text-white">{theme.name}</h2>
                  <p className="mt-2 text-sm text-white/65">{theme.tagline}</p>
                </div>
                <span
                  className={`shrink-0 rounded-tg-pill px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                    theme.status === 'complete'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : theme.status === 'preview'
                        ? 'bg-violet-500/20 text-violet-300'
                        : 'bg-white/10 text-white/50'
                  }`}
                >
                  {theme.status}
                </span>
              </div>
              <p className="mt-6 text-sm font-medium text-tg-cyan group-hover:underline">View theme →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
