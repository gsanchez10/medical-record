import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages, getTranslations} from 'next-intl/server';
import './globals.css'

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: 'metadata'});

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}