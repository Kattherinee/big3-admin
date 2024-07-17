import { createSlice } from "@reduxjs/toolkit";
import { PlayerDto } from "../../../../api/dto/PlayersDtos/PlayerDto";
import { fetchPlayers } from "../../playersThunks/fetchPlayersThunk";
import { addPlayerThunk } from "../../playersThunks/addPlayerThunk";
import { getPositionsThunk } from "../../playersThunks/getPositionsThunk";

interface PlayerState {
  data: PlayerDto[];
  count: number;
  page: number;
  size: number;
  status: string;
  error: string | null;
  positions: string[];
  positionsStatus: string;
  positionsError: string | null;
}

const initialState: PlayerState = {
  data: [],
  count: 0,
  page: 1,
  size: 6,
  status: "idle",
  error: null,
  positions: [],
  positionsStatus: "idle",
  positionsError: null,
};
const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.count = action.payload.count;
        state.page = action.payload.page;
        state.size = action.payload.size;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(addPlayerThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
        state.count += 1;
      })
      .addCase(addPlayerThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPlayerThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || null;
      })

      .addCase(getPositionsThunk.pending, (state) => {
        state.positionsStatus = "loading";
      })
      .addCase(getPositionsThunk.fulfilled, (state, action) => {
        state.positionsStatus = "succeeded";
        state.positions = action.payload;
        state.positionsError = null;
      })
      .addCase(getPositionsThunk.rejected, (state, action) => {
        state.positionsStatus = "failed";
        state.positionsError = action.payload?.message || null;
      });
  },
});

export default playerSlice.reducer;
