import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadState, saveState } from "./storage";
import { loginUser, registerUser } from "../../../api/requests/authorization";
import { updateProfile } from "../user.thunks/updateProfileThunk";
import { RootState } from "./store";

export const TOKEN_PERSISTENT_STATE = "userData";

export interface UserPersistentState {
  token: string | null;
  userName: string | null;
  avatarUrl: string | null;
}

export interface UserState {
  token: string | null;
  userName: string | null;
  avatarUrl: string | null;
  loginState: null | "rejected";
  error?: string | null;
}

const initialState: UserState = {
  token: loadState<UserPersistentState>(TOKEN_PERSISTENT_STATE)?.token ?? null,
  userName:
    loadState<UserPersistentState>(TOKEN_PERSISTENT_STATE)?.userName ?? null,
  avatarUrl:
    loadState<UserPersistentState>(TOKEN_PERSISTENT_STATE)?.avatarUrl ?? null,
  loginState: null,
  error: null,
};

export const authorize = createAsyncThunk(
  "user/login",
  async (params: { login: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginUser({
        login: params.login,
        password: params.password,
      });
      return response.data;
    } catch (error: any) {
      if (error && error.status === 401) {
        return rejectWithValue({ status: 401, message: "Unauthorized" });
      }
      return rejectWithValue({
        status: error.response?.status,
        message: error.message,
      });
    }
  }
);

export const registry = createAsyncThunk(
  "user/register",
  async (params: { userName: string; login: string; password: string }) => {
    const response = await registerUser({
      userName: params.userName,
      login: params.login,
      password: params.password,
    });
    return response.data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userName = null;
      state.avatarUrl = null;
      localStorage.removeItem(TOKEN_PERSISTENT_STATE);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorize.fulfilled, (state, action) => {
        state.error = null;
        const { token, name, avatarUrl } = action.payload;
        state.token = token;
        state.userName = name;
        state.avatarUrl = avatarUrl;
        saveState(
          {
            token: state.token,
            userName: state.userName,
            avatarUrl: state.avatarUrl,
          },
          TOKEN_PERSISTENT_STATE
        );
      })
      .addCase(registry.fulfilled, (state, action) => {
        const { token, name, avatarUrl } = action.payload;
        state.token = token;
        state.userName = name;
        state.avatarUrl = avatarUrl;
        saveState(
          {
            token: state.token,
            userName: state.userName,
            avatarUrl: state.avatarUrl,
          },
          TOKEN_PERSISTENT_STATE
        );
      })
      .addCase(authorize.rejected, (state, action) => {
        state.error = (action.payload as any).message;
      })
      .addCase(registry.rejected, (state, action) => {
        state.error = (action.payload as any).message;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        const { userName, avatarUrl } = action.payload;
        state.userName = userName;
        state.avatarUrl = avatarUrl;
        saveState(
          {
            token: state.token,
            userName: state.userName,
            avatarUrl: state.avatarUrl,
          },
          TOKEN_PERSISTENT_STATE
        );
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = (action.payload as any).message;
      });
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;

export const userActions = userSlice.actions;
