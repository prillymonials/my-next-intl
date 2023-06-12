import Link from 'next/link';
import { useRouter } from 'next/router';

const PATH_LOCALE_MAPS: Record<string, Record<string, string>> = {
  '/': {
    en: '/en',
    fr: '/fr',
    de: '/de',
  },
  '/mounts': {
    en: '/en/mounts',
    fr: '/fr/montures',
    de: '/de/reittiere',
  },
};

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="px-4 py-4 flex justify-end shadow-md bg-gray-100 fixed top-0 left-0 right-0">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Link
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          href={PATH_LOCALE_MAPS[pathname]?.en || '/'}
          locale={false}
        >
          EN
        </Link>
        <Link
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          href={PATH_LOCALE_MAPS[pathname]?.fr || '/'}
          locale={false}
        >
          FR
        </Link>
        <Link
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          href={PATH_LOCALE_MAPS[pathname]?.de || '/'}
          locale={false}
        >
          DE
        </Link>
      </div>
    </header>
  );
}
