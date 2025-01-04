import { useSnackbar } from "notistack";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button, FormControl, FormLabel, Input, Sheet, Stack, Typography } from "@mui/joy";

import type { AppDispatch, RootState } from "../core/store";
import { loginUser } from "../core/store/slices/authSlice";

export default function PageLogin() {
  const [username, setUsername] = useState("testuser");
  const [password, setPassword] = useState("Test123!");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ username, password })).unwrap();
      enqueueSnackbar("Login successful! Welcome back.", { variant: "success" });
      navigate(from, { replace: true });
    } catch {
      // Error is already handled in the slice
    }
  };

  return (
    <Sheet
      sx={{
        maxWidth: 400,
        mx: "auto",
        my: 4,
        py: 3,
        px: 2,
        borderRadius: "sm",
      }}
    >
      <Stack spacing={2}>
        <Typography level="h3" component="h1">
          Welcome Back
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} required />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>

            {error && (
              <Sheet variant="soft" color="danger" sx={{ p: 2 }}>
                {error}
              </Sheet>
            )}

            <Button type="submit" loading={isLoading}>
              Login
            </Button>

            <Typography level="body-sm" textAlign="center">
              Don't have an account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register here
              </Link>
            </Typography>
          </Stack>
        </form>
      </Stack>
    </Sheet>
  );
}
