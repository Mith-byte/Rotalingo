import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import LocaleLayoutClient from './LocaleLayoutClient';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ar' | 'fa' | 'ru')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <LocaleLayoutClient locale={locale} messages={messages as Record<string, unknown>}>
      {children}
    </LocaleLayoutClient>
  );
}
