import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../store/store";

import { PlayerTeamNameDto } from "../../../api/dto/PlayersDtos/PlayerTeamNameDto";
import { getPlayerRequest } from "../../../api/requests/playerRequests/getPlayerRequest";

export const getPlayerThunk = createAsyncThunk<
  PlayerTeamNameDto,
  { id: number },
  { rejectValue: string; state: RootState }
>("players/getPlayer", async ({ id }, { rejectWithValue, getState }) => {
  const state = getState();
  const token = state.user.token;

  if (!token) {
    return rejectWithValue("Unauthorized");
  }

  try {
    const response = await getPlayerRequest(id, token);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch teams");
  }
});
