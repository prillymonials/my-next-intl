/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* https://nextjs.org/docs/pages/building-your-application/routing/internationalization */
  i18n: {
    locales: ['default', 'en', 'de', 'fr'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        hostname: 'ffxivcollect.com',
      },
    ],
  },
  /* https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites#rewrites-with-i18n-support */
  async rewrites() {
    return [
      {
        source: '/de/reittiere',
        destination: '/de/mounts',
        locale: false,
      },
      {
        source: '/fr/montures',
        destination: '/fr/mounts',
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
