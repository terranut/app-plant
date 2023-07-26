
import UIProvider from '../src/ui/provider';
import '@fontsource/dm-sans';
import '@fontsource/nunito';
import { AppProps } from '../node_modules/next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <UIProvider>
            <Component {...pageProps} />
        </UIProvider>
  );
}

export default MyApp;
