import { useSnackbar } from "notistack";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, FormControl, FormLabel, Input, Sheet, Stack } from "@mui/joy";

import type { AppDispatch, RootState } from "../core/store";
import { loginUser } from "../core/store/slices/authSlice";

export default function PageLogin() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await dispatch(loginUser({ username, password })).unwrap();
      // Add the token to the session storage
      sessionStorage.setItem("token", token);

      enqueueSnackbar("Login successful! Welcome back.", { variant: "success" });
      navigate("/");
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
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="any username is fine"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="any password is fine"
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
          <p>Any username and password will work.</p>
        </Stack>
      </form>
    </Sheet>
  );
}
