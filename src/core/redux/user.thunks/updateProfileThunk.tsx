import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../store/store";

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (
    params: { userName: string; avatarUrl: string },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as RootState;
    const token = state.user.token;

    if (!token) {
      return rejectWithValue({ status: 401, message: "Unauthorized" });
    }

    try {
      return {
        userName: params.userName,
        avatarUrl: params.avatarUrl,
      };
    } catch (error: any) {
      return rejectWithValue({
        status: error.response?.status,

        message: error.message,
      });
    }
  }
);
