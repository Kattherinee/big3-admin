import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { deletePlayerRequest } from "../../../api/requests/playerRequests/deletePlayerRequest";

export const deletePlayerThunk = createAsyncThunk<
  { id: number },
  number,
  { rejectValue: { status: number; message: string }; state: RootState }
>("players/deletePlayer", async (id, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const token = state.user.token;

  if (!token) {
    return rejectWithValue({ status: 401, message: "Unauthorized" });
  }

  try {
    await deletePlayerRequest(id, token);
    return { id };
  } catch (error: any) {
    return rejectWithValue({
      status: error.response?.status,
      message: error.message,
    });
  }
});
