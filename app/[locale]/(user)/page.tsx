import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslator(locale, 'IndexMeta');

  return {
    title: t('title'),
  };
}

export default function Index() {
  const t = useTranslations('Index');
  return <h1 className="text-center my-10">{t('title')}</h1>;
}
