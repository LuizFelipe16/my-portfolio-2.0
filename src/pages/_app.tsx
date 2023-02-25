import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { AppStatus } from "../components/AppStatus";

import 'swiper/css/bundle';
import { ThemeProvider, AppStatusProvider } from '../contexts';
import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <ThemeProvider>
        <AppStatusProvider>
          <Component {...pageProps} />
          <AppStatus />
        </AppStatusProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;