import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTeamRequest } from "../../../api/requests/teamsRequests/addTeamRequest";
import { RootState } from "../store/store";
import { TeamDto } from "../../../api/dto/TeamsDtos/TeamDto";
import { NewTeamDto } from "../../../api/dto/TeamsDtos/NewTeamDto";

export const addTeamThunk = createAsyncThunk<
  TeamDto,
  NewTeamDto,
  { rejectValue: { status: number; message: string }; state: RootState }
>("teams/addTeam", async (params, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const token = state.user.token;

  if (!token) {
    return rejectWithValue({ status: 401, message: "Unauthorized" });
  }

  try {
    const response = await addTeamRequest(params, token);
    return response;
  } catch (error: any) {
    return rejectWithValue({
      status: error.response?.status,
      message: error.message,
    });
  }
});
