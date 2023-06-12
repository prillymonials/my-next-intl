import Header from '@/components/layouts/Header';
import '@/styles/globals.css';
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <div>
        <Header />
        <main className="min-h-screen px-4 pt-20">
          <Component {...pageProps} />
        </main>
      </div>
    </NextIntlProvider>
  );
}
