
import {MetadataRoute} from 'next';
import {host} from '@/config';
import {Locale, getPathname, routing} from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {

    // Add debug logs
    console.log('=== SITEMAP GENERATION START ===');
    console.log('Available locales:', routing.locales);
    console.log('Default locale:', routing.defaultLocale);
    console.log('Configured pathnames:', routing.pathnames);


    const sitemapEntries = [getEntry('/'), getEntry('/pathnames')];
  
    console.log('Final sitemap entries:', JSON.stringify(sitemapEntries, null, 2));
    console.log('=== SITEMAP GENERATION END ===');

  return [getEntry('/'), getEntry('/pathnames')];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      )
    }
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({locale, href});
  return host + pathname;
}
