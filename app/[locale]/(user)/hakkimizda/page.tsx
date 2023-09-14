import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslator(locale, 'AboutMeta');

  return {
    title: t('title'),
  };
}

export default function AboutPage() {
  const t = useTranslations('About');
  return <h1 className="text-center my-10">{t('title')}</h1>;
}
