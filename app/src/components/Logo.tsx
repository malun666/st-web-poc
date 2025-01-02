import { Link } from "react-router-dom";

import { BrightnessAutoRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/joy";

export function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <IconButton component={Link} to="/" color="primary" variant="soft">
        <BrightnessAutoRounded />
      </IconButton>
      <Typography
        component={Link}
        to="/"
        sx={{
          fontSize: "1.25rem",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {import.meta.env.VITE_APP_NAME}
      </Typography>
    </Box>
  );
}
