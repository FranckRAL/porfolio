import { NextIntlClientProvider, hasLocale } from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import LocaleSync from '@/components/pieces/LocaleSync';



export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title').concat(' | Franck Andritina'),
    description: t('description'),
  };
}


type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function PublicLayout({
  children,
  params, 
}: Props) {

  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>  
        <LocaleSync />
        {children}
    </NextIntlClientProvider>
  );
}