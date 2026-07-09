import type { Metadata } from 'next';
import { buildPreviewMetadata, defaultMetadata } from '@/config/seo';

export function createMetadata(overrides?: Metadata): Metadata {
  if (!overrides) return defaultMetadata;
  return { ...defaultMetadata, ...overrides };
}

export { buildPreviewMetadata, defaultMetadata };
