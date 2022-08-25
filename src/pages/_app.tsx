import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import 'swiper/css/bundle';
import { ThemeProvider } from '../contexts';
import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;