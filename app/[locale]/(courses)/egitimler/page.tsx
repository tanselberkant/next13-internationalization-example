import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslator(locale, 'CoursesMeta');

  return {
    title: t('title'),
  };
}

export default function CoursesPage() {
  const t = useTranslations('Courses');
  return <h1 className="text-center my-10">{t('title')}</h1>;
}
