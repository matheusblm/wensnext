import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { theme } from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wens - Marketing Digital</title>
        <meta
          name="description"
          content="Controle seu marketing com eficiência"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
