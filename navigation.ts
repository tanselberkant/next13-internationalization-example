import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';

export const locales = ['en', 'tr'] as const;

export const pathnames = {
  '/': '/',
  '/hakkimizda': {
    en: '/about',
    tr: '/hakkimizda',
  },
  '/egitimler': {
    en: '/courses',
    tr: '/egitimler',
  },
  '/blogs': {
    en: '/',
    tr: '/blogs',
  },
  '/iletisim': {
    en: '/contact',
    tr: '/iletisim',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
