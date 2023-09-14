import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { usePathname, Link } from '@/navigation';
import Switcher from './Switcher';

const Navigation = () => {
  const locale = useLocale();
  const t = useTranslations('Navbar');
  // const path = usePathname();

  if (locale === 'en') {
    return (
      <div className="flex justify-between space-x-6 px-20 flex-row bg-navigationLinks w-full h-20 items-center">
        <Link href={'/'} className="text-white font-semibold text-xl">
          SITE LOGO
        </Link>
        <div className="space-x-6">
          <Link
            href={'/hakkimizda'}
            className="text-white font-semibold text-xl"
          >
            {t('about')}
          </Link>
          <Link href={'/iletisim'} className="text-white font-semibold text-xl">
            {t('contact')}
          </Link>
          <Link href={'/blogs'} className="text-white font-semibold text-xl">
            {t('posts')}
          </Link>
          <Switcher />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between space-x-6 px-20 flex-row bg-navigationLinks w-full h-20 items-center">
        <Link href={'/'} className="text-white font-semibold text-xl">
          SITE LOGO
        </Link>
        <div className="space-x-6">
          <Link
            href={'/hakkimizda'}
            className="text-white font-semibold text-xl"
          >
            {t('about')}
          </Link>
          <Link
            href={'/egitimler'}
            className="text-white font-semibold text-xl"
          >
            {t('courses')}
          </Link>
          <Link href={'/iletisim'} className="text-white font-semibold text-xl">
            {t('contact')}
          </Link>
          <Link href={'/blogs'} className="text-white font-semibold text-xl">
            {t('posts')}
          </Link>
          <Switcher />
        </div>
      </div>
    );
  }
};

export default Navigation;
