import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import teamsSlice from "./slices/teams.slice";
import { saveState } from "./storage";
import { TOKEN_PERSISTENT_STATE } from "./slices/user.slice";
import playerSlice from "./slices/player.slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    teams: teamsSlice,
    players: playerSlice,
  },
});

store.subscribe(() => {
  const { token, userName, avatarUrl } = store.getState().user;
  saveState({ token, userName, avatarUrl }, TOKEN_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
