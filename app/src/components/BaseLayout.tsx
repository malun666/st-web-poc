import { Box } from "@mui/joy";
import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "./Logo";

export function BaseLayout(): JSX.Element {
  return (
    <Fragment>
      <h1>BaseLayout</h1>
      <Box sx={{ gridArea: "1 / 1 / 2 / 2 " }}>
        <Logo />
      </Box>

      <Box sx={{ gridArea: "1 / 1 / -1 / -1", pt: "60px" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Fragment>
  );
}

export default BaseLayout;
