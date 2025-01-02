import { ReactNode, createElement } from "react";

import { ThemeProvider as Provider, extendTheme } from "@mui/joy/styles";

/**
 * Customized Joy UI theme.
 * @see https://mui.com/joy-ui/customization/approaches/
 */
export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: "#228be6",
          solidHoverBg: "#1c7ed6",
          solidActiveBg: undefined,
          softColor: "#228be6",
          softBg: "rgba(231, 245, 255, 1)",
          softHoverBg: "rgba(208, 235, 255, 0.65)",
          softActiveBg: undefined,
          outlinedColor: "#228be6",
          outlinedBorder: "#228be6",
          outlinedHoverBg: "rgba(231, 245, 255, 0.35)",
          outlinedHoverBorder: undefined,
          outlinedActiveBg: undefined,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          solidBg: "#339af0",
          solidHoverBg: "#4dabf7",
          solidActiveBg: undefined,
          softColor: "#74c0fc",
          softBg: "rgba(48, 76, 102, 0.5)",
          softHoverBg: "rgba(48, 76, 102, 0.65)",
          softActiveBg: undefined,
          outlinedColor: "#74c0fc",
          outlinedBorder: "#74c0fc",
          outlinedHoverBg: "rgba(48, 76, 102, 0.35)",
          outlinedHoverBorder: undefined,
          outlinedActiveBg: undefined,
        },
        background: {
          body: "#1a1b1e",
          surface: "#2c2d31",
        },
        text: {
          primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
  },
  shadow: {},
  typography: {},
  components: {},
});

export function ThemeProvider(props: ThemeProviderProps): JSX.Element {
  return createElement(Provider, { theme, ...props });
}

export type ThemeProviderProps = {
  children: ReactNode;
};
