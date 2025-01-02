import { IconButton } from "@mui/joy";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <IconButton
      variant="outlined"
      color="primary"
      onClick={toggleTheme}
      title={isDarkMode ? "Light mode" : "Dark mode"}
    >
      {isDarkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
    </IconButton>
  );
}
