import '../../../styles/globals.css';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
