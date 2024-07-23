import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { TeamDto } from "../../../api/dto/TeamsDtos/TeamDto";
import { updateTeamRequest } from "../../../api/requests/teamsRequests/updateTeamRequest";

export const updateTeamThunk = createAsyncThunk<
  TeamDto,
  TeamDto,
  { rejectValue: { status: number; message: string }; state: RootState }
>("teams/updateTeam", async (params, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const token = state.user.token;

  if (!token) {
    return rejectWithValue({ status: 401, message: "Unauthorized" });
  }

  try {
    const response = await updateTeamRequest(params, token);
    return response;
  } catch (error: any) {
    return rejectWithValue({
      status: error.response?.status,
      message: error.message,
    });
  }
});
