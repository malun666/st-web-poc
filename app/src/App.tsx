import "@fontsource/inter";
import { SnackbarProvider } from "notistack";

import { Provider } from "react-redux";

import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";

import { store } from "./core/store";
import { theme } from "./core/theme";
import { Router } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <Router />
        </SnackbarProvider>
      </CssVarsProvider>
    </Provider>
  );
}

export default App;
