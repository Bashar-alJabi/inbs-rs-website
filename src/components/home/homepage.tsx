import type { Locale } from '@/lib/site';
import { HomeStatement } from './home-statement';
import { HomeCta } from './home-cta';

/** Home sections are added individually after visual approval. */
export function Homepage({ locale }: { locale: Locale }) {
  return (
    <main className="re-main">
      <HomeStatement locale={locale} />
      <HomeCta locale={locale} />
    </main>
  );
}
