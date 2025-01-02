import { useColorScheme } from "@mui/joy/styles";

export function useTheme() {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const isDarkMode = mode === "dark";

  return {
    mode,
    setMode,
    toggleTheme,
    isDarkMode,
  };
}
