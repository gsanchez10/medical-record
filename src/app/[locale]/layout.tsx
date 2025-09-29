import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

const locales = ['en', 'es'];

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'es'}];
}

export async function generateMetadata({
  params: {locale}
}: Props) {
  const t = await getTranslations({locale, namespace: 'metadata'});

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}