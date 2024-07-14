import { createSlice } from "@reduxjs/toolkit";
import { TeamDto } from "../../../api/dto/TeamsDtos/TeamDto";
import { fetchTeams } from "../teamsThunks/fetchTeamsThunk";
import { addTeamThunk } from "../teamsThunks/addTeamThunk";

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    data: [] as TeamDto[],
    count: 0,
    page: 1,
    size: 6,
    status: "idle",
    error: null as string | null,
  },
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
      });
  },
});

export default teamsSlice.reducer;
