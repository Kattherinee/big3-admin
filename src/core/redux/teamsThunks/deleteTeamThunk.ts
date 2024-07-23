import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { deleteTeamRequest } from "../../../api/requests/teamsRequests/deleteTeamRequest";

export const deleteTeamThunk = createAsyncThunk<
  { id: number },
  number,
  { rejectValue: { status: number; message: string }; state: RootState }
>("teams/deleteTeam", async (id, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const token = state.user.token;

  if (!token) {
    return rejectWithValue({ status: 401, message: "Unauthorized" });
  }

  try {
    await deleteTeamRequest(id, token);
    return { id };
  } catch (error: any) {
    if (error.response) {
      return rejectWithValue({
        status: error.response.status,
        message: error.response.data.message || "Failed to delete team",
      });
    }
    return rejectWithValue({
      status: 500,
      message: "Unknown error occurred",
    });
  }
});
