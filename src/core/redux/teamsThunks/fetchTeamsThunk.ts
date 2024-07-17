import { fetchTeamRequest } from "../../../api/requests/teamsRequests/FetchTeamsRequest";
import { RootState } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TeamDtoPageResult } from "../../../api/dto/TeamsDtos/TeamDtoPageResult";
import { TeamDto } from "../../../api/dto/TeamsDtos/TeamDto";

export const fetchTeams = createAsyncThunk<
  TeamDtoPageResult,
  { name: string; page: number; pageSize: number },
  { rejectValue: string; state: RootState }
>(
  "teams/fetchTeams",
  async ({ name, page, pageSize }, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.user.token;

    if (!token) {
      return rejectWithValue("Unauthorized");
    }

    try {
      const response = await fetchTeamRequest(name, page, pageSize, token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch teams");
    }
  }
);

export const getTeamNameById = (teamId: number, teams: TeamDto[]): string => {
  const team = teams.find((team) => team.id === teamId);
  return team ? team.name : "Unknown Team";
};
