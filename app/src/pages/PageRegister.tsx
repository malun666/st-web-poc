import { useSnackbar } from "notistack";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, FormControl, FormLabel, Input, Sheet, Stack, Typography } from "@mui/joy";

import { register } from "../service/authService";

export default function PageRegister() {
  const [username, setUsername] = useState("testuser");
  const [email, setEmail] = useState("testuser@example.com");
  const [password, setPassword] = useState("Test123!");
  const [confirmPassword, setConfirmPassword] = useState("Test123!");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      await register({ username, email, password });
      enqueueSnackbar("Registration successful! Please login.", { variant: "success" });
      navigate("/login");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Registration failed");
    } finally {
      setIsLoading(false);
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
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FormControl required>
              <FormLabel>Username</FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </FormControl>

            <FormControl required>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </FormControl>

            <FormControl required>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </FormControl>

            <FormControl required>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </FormControl>

            {error && (
              <Sheet variant="soft" color="danger" sx={{ p: 2 }}>
                {error}
              </Sheet>
            )}

            <Button type="submit" loading={isLoading}>
              Register
            </Button>

            <Typography level="body-sm" textAlign="center">
              Already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login here
              </Link>
            </Typography>
          </Stack>
        </form>
      </Stack>
    </Sheet>
  );
}
