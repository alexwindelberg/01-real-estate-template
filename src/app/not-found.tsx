// import BaseLayout from '@/components/BaseLayout';
// import NotFoundPage from '@/components/NotFoundPage';
import {routing} from '@/i18n/routing';
import { Locale } from '../i18n/routing';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    // TODO: Build your base layout and notfound page
    // <BaseLayout locale={routing.defaultLocale}>
    //   <NotFoundPage />
    // </BaseLayout>

    <div lang={routing.defaultLocale}>
        404
    </div>
  );
}