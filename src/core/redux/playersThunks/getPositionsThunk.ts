import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { getPositionsRequest } from "../../../api/requests/playerRequests/getPositionsRequest";

export const getPositionsThunk = createAsyncThunk<
  string[],
  void,
  { rejectValue: { status: number; message: string }; state: RootState }
>("players/getPositions", async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const token = state.user.token;

  if (!token) {
    return rejectWithValue({ status: 401, message: "Unauthorized" });
  }

  try {
    const response = await getPositionsRequest(token);
    return response.data as string[];
  } catch (error: any) {
    return rejectWithValue({
      status: error.response?.status,
      message: error.message,
    });
  }
});
