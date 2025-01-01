import { Box, Button } from "@mui/joy";
import { Fragment, Suspense } from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { Logo } from "./Logo";
import { useSelector } from "react-redux";
import type { RootState } from "../core/store";

export function BaseLayout(): JSX.Element {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Fragment>
      <Box
        component="header"
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Logo />
          <Button component={RouterLink} to="/" variant="plain">
            Home
          </Button>
          <Button component={RouterLink} to="/about" variant="plain">
            About
          </Button>
        </Box>

        <Box>
          {user ? (
            <Button component={RouterLink} to="/profile" variant="outlined">
              Profile
            </Button>
          ) : (
            <Button component={RouterLink} to="/login" variant="outlined">
              Login
            </Button>
          )}
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Fragment>
  );
}

export default BaseLayout;
