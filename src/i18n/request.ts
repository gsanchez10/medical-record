import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'es'];

export default getRequestConfig(async ({locale}) => {
  // If no locale is provided, default to 'en'
  if (!locale) {
    locale = 'en';
  }
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return {
      locale,
      messages
    };
  } catch (error) {
    notFound();
  }
});