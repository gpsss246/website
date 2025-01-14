import "./styles/App.css";
import { MainPage } from "./components/Main";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <MainPage></MainPage>
      </ChakraProvider>
    </div>
  );
}

export default App;
