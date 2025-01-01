import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { Router } from "./routes";
import { SnackbarProvider } from "notistack";
import { theme } from "./core/theme";
import { Provider } from "react-redux";
import { store } from "./core/store";

import "@fontsource/inter";

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
