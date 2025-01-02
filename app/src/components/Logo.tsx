import { Link } from "react-router-dom";

import { BrightnessAutoRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/joy";

export function Logo() {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
      >
        <IconButton component={Link} to="/" color="primary" variant="soft">
          <BrightnessAutoRounded />
        </IconButton>
        <Typography sx={{ fontSize: "1.25rem" }} level="h4" component="div">
          {import.meta.env.VITE_APP_NAME}
        </Typography>
      </Box>
    </Link>
  );
}
