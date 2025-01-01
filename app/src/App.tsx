import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { Router } from "./routes";
import { SnackbarProvider } from "notistack";
import { theme } from "./core/theme";

import "@fontsource/inter";

function App() {
  return (
    <>
      <CssVarsProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <Router />
        </SnackbarProvider>
      </CssVarsProvider>
    </>
  );
}

export default App;
