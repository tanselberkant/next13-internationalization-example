import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const Navigationv2 = () => {
  const t = useTranslations('Navbar');
  return (
    <div className="flex justify-center bg-rexRed w-full h-20 items-center">
      <Link href={'/'} className="text-black text-xl font-semibold">
        {t('main')}
      </Link>
    </div>
  );
};

export default Navigationv2;
