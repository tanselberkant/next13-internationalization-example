import '../../../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigationv2 from '@/components/Navigationv2';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navigationv2 />
        {children}
      </body>
    </html>
  );
}
