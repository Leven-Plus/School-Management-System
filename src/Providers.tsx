import React from "react";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./app/store";
import { CookiesProvider } from "react-cookie";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CookiesProvider>
    </Provider>
  );
}
