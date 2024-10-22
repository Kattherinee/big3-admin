import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlayerDtoPageResult } from "../../../api/dto/PlayersDtos/PlayerDtoPageResult";
import { RootState } from "../store/store";
import { fetchPlayersRequest } from "../../../api/requests/playerRequests/FetchPlayersRequest";

interface FetchPlayersParams {
  name?: string;
  page?: number;
  pageSize?: number;
}

export const fetchPlayersThunk = createAsyncThunk<
  PlayerDtoPageResult,
  FetchPlayersParams,
  { rejectValue: string; state: RootState }
>(
  "players/fetchPlayers",
  async (
    { name = "", page = 1, pageSize = 6 } = {},
    { rejectWithValue, getState }
  ) => {
    const state = getState();
    const token = state.user.token;

    if (!token) {
      return rejectWithValue("Unauthorized");
    }

    try {
      const response = await fetchPlayersRequest(name, page, pageSize, token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch players");
    }
  }
);
