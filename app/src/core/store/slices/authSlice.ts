import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AppThunk } from "..";
import { login as loginApi } from "../../../service/authService";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.error = null;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setToken, setLoading, setError } = authSlice.actions;

export const loginUser =
  (username: string, password: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await loginApi({ username, password });
      dispatch(setUser(response.user));
      dispatch(setToken(response.token));
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : "Login failed"));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const logout = (): AppThunk => async (dispatch) => {
  dispatch(setUser(null));
  dispatch(setToken(null));
};

export default authSlice.reducer;
