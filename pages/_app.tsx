import { FC } from 'react';
import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import PageProvider from '../src/helpers/PageProvider';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <div className={raleway.className}>
    <PageProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </PageProvider>
  </div>
);

export default App;
