import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { RtlProvider } from "../rtl-provider/rtl-provider";

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider>
      <RtlProvider>
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
