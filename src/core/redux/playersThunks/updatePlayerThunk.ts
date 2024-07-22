import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { PlayerDto } from "../../../api/dto/PlayersDtos/PlayerDto";
import { updatePlayerRequest } from "../../../api/requests/playerRequests/updatePlayerRequest";

export const updatePlayerThunk = createAsyncThunk<
  PlayerDto,
  PlayerDto,
  { rejectValue: { status: number; message: string }; state: RootState }
>("players/updatePlayer", async (params, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const token = state.user.token;

  if (!token) {
    return rejectWithValue({ status: 401, message: "Unauthorized" });
  }

  try {
    const response = await updatePlayerRequest(params, token);
    return response;
  } catch (error: any) {
    return rejectWithValue({
      status: error.response?.status,
      message: error.message,
    });
  }
});
