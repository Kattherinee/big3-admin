import { createSlice } from "@reduxjs/toolkit";
import { PlayerDto } from "../../../../api/dto/PlayersDtos/PlayerDto";
import { fetchPlayers } from "../../playersThunks/fetchPlayersThunk";
import { addPlayerThunk } from "../../playersThunks/addPlayerThunk";
import { getPositionsThunk } from "../../playersThunks/getPositionsThunk";
import { getPlayerThunk } from "../../playersThunks/getPlayerThunk";
import { updatePlayerThunk } from "../../playersThunks/updatePlayerThunk";
import { deletePlayerThunk } from "../../playersThunks/deletePlayerThunk";
import { PlayerTeamNameDto } from "../../../../api/dto/PlayersDtos/PlayerTeamNameDto";

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
  currentPlayer: PlayerTeamNameDto | null;
  currentPlayerStatus: string;
  currentPlayerError: string | null;
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
  currentPlayer: null,
  currentPlayerStatus: "idle",
  currentPlayerError: null,
};

const playerSlice = createSlice({
  name: "players",
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
      .addCase(updatePlayerThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.data.findIndex(
          (player) => player.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updatePlayerThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePlayerThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || null;
      })
      .addCase(deletePlayerThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (player) => player.id !== action.payload.id
        );
        state.count -= 1;
      })
      .addCase(deletePlayerThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePlayerThunk.rejected, (state, action) => {
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
      })
      .addCase(getPlayerThunk.pending, (state) => {
        state.currentPlayerStatus = "loading";
      })
      .addCase(getPlayerThunk.fulfilled, (state, action) => {
        state.currentPlayerStatus = "succeeded";
        state.currentPlayer = action.payload;
      })
      .addCase(getPlayerThunk.rejected, (state, action) => {
        state.currentPlayerStatus = "failed";
        state.currentPlayerError = action.payload as string;
      });
  },
});

export default playerSlice.reducer;
