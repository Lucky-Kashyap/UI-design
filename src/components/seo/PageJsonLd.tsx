import { organizationJsonLd } from '@/config/seo';

const PageJsonLd = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
);

export default PageJsonLd;
