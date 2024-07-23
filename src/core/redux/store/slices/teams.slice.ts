import { createSlice } from "@reduxjs/toolkit";
import { TeamDto } from "../../../../api/dto/TeamsDtos/TeamDto";
import { fetchTeams } from "../../teamsThunks/fetchTeamsThunk";
import { addTeamThunk } from "../../teamsThunks/addTeamThunk";
import { getTeamThunk } from "../../teamsThunks/getTeamThunk";
import { updateTeamThunk } from "../../teamsThunks/updateTeamThunk";
import { deleteTeamThunk } from "../../teamsThunks/deleteTeamThunk";

interface TeamState {
  data: TeamDto[];
  count: number;
  page: number;
  size: number;
  status: string;
  error: string | null;
  currentTeam: TeamDto | null;
  currentTeamStatus: string;
  currentTeamError: string | null;
}

const initialState: TeamState = {
  data: [],
  count: 0,
  page: 1,
  size: 6,
  status: "idle",
  error: null,
  currentTeam: null,
  currentTeamStatus: "idle",
  currentTeamError: null,
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.count = action.payload.count;
        state.page = action.payload.page;
        state.size = action.payload.size;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(addTeamThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
        state.count += 1;
      })
      .addCase(addTeamThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTeamThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || null;
      })
      .addCase(getTeamThunk.pending, (state) => {
        state.currentTeamStatus = "loading";
      })
      .addCase(getTeamThunk.fulfilled, (state, action) => {
        state.currentTeamStatus = "succeeded";
        state.currentTeam = action.payload;
      })
      .addCase(getTeamThunk.rejected, (state, action) => {
        state.currentTeamStatus = "failed";
        state.currentTeamError = action.payload as string;
      })
      .addCase(updateTeamThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.data.findIndex(
          (team) => team.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateTeamThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTeamThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || null;
      })
      .addCase(deleteTeamThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter((team) => team.id !== action.payload.id);
        state.count -= 1;
      })
      .addCase(deleteTeamThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTeamThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || null;
      });
  },
});

export default teamsSlice.reducer;
