import { fetchTeamRequest } from "../../../api/requests/teamsRequests/FetchTeamsRequest";
import { RootState } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TeamDtoPageResult } from "../../../api/dto/TeamsDtos/TeamDtoPageResult";

export const fetchTeams = createAsyncThunk<
  TeamDtoPageResult,
  { page: number; pageSize: number },
  { rejectValue: string; state: RootState }
>(
  "teams/fetchTeams",
  async ({ page, pageSize }, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.user.token;

    if (!token) {
      return rejectWithValue("Unauthorized");
    }

    try {
      const response = await fetchTeamRequest(page, pageSize, token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch teams");
    }
  }
);
