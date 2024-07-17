import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPlayerRequest } from "../../../api/requests/playerRequests/addPlayerRequest";
import { RootState } from "../store/store";
import { PlayerDto } from "../../../api/dto/PlayersDtos/PlayerDto";
import { NewPlayerDto } from "../../../api/dto/PlayersDtos/NewPlayerDto";

export const addPlayerThunk = createAsyncThunk<
  PlayerDto,
  NewPlayerDto,
  { rejectValue: { status: number; message: string }; state: RootState }
>("players/addPlayer", async (params, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const token = state.user.token;

  if (!token) {
    return rejectWithValue({ status: 401, message: "Unauthorized" });
  }

  try {
    const response = await addPlayerRequest(params, token);
    return response;
  } catch (error: any) {
    return rejectWithValue({
      status: error.response?.status,
      message: error.message,
    });
  }
});
