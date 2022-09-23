import App from "./App";
import "./index.css";
import theme from "./components/layout/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { setUpStore } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Provider store={setUpStore()}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);
