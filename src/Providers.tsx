import React from "react";

import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./app/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </Provider>
  );
}
