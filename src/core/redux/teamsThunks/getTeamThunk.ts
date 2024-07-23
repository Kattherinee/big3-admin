import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { TeamDto } from "../../../api/dto/TeamsDtos/TeamDto";
import { getTeamRequest } from "../../../api/requests/teamsRequests/getTeamRequest";

export const getTeamThunk = createAsyncThunk<
  TeamDto,
  { id: number },
  { rejectValue: string; state: RootState }
>("teams/getTeam", async ({ id }, { rejectWithValue, getState }) => {
  const state = getState();
  const token = state.user.token;

  if (!token) {
    return rejectWithValue("Unauthorized");
  }

  try {
    const response = await getTeamRequest(id, token);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch team");
  }
});
