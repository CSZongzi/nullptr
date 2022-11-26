import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import './_app.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
