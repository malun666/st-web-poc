import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Avatar, Box, Card, Divider, Stack, Typography } from "@mui/joy";

import type { RootState } from "../core/store";

export default function PageProfile() {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Stack spacing={4} sx={{ maxWidth: 800, mx: "auto" }}>
      <Typography level="h1">Profile</Typography>

      <Card>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Avatar
            size="lg"
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
          />
          <Box>
            <Typography level="h3">{user.username}</Typography>
            <Typography level="body-sm" color="neutral">
              {user.email}
            </Typography>
          </Box>
        </Stack>

        <Divider />

        <Stack spacing={2} mt={2}>
          <Box>
            <Typography level="title-sm" color="neutral">
              User ID
            </Typography>
            <Typography>{user.id}</Typography>
          </Box>

          <Box>
            <Typography level="title-sm" color="neutral">
              Account Status
            </Typography>
            <Typography color="success">Active</Typography>
          </Box>

          <Box>
            <Typography level="title-sm" color="neutral">
              Member Since
            </Typography>
            <Typography>{new Date().toLocaleDateString()}</Typography>
          </Box>
        </Stack>
      </Card>
    </Stack>
  );
}
