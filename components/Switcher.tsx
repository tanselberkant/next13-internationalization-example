'use client';
import { usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const Switcher = () => {
  const router = useRouter();
  const pathName = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (event: any) => {
    const locale = event.target.value;

    const cleanedPathName = pathName.startsWith('/')
      ? pathName
      : '/' + pathName;
    if (locale === 'en') {
      router.push(`/en${cleanedPathName}`);
    } else {
      router.push(`/tr${cleanedPathName}`);
    }
  };

  return (
    <select onChange={handleLanguageChange} defaultValue={locale}>
      <option value="tr">Turkish</option>
      <option value="en">English</option>
    </select>
  );
};

export default Switcher;
