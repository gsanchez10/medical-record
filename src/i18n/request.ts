import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';

export default getRequestConfig(async () => {
  // Get locale from middleware headers or default to 'en'
  const headersList = headers();
  const locale = headersList.get('x-locale') || 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});