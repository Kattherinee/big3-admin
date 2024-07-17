import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { TeamsPage } from "./pages/teams/TeamsPage/TeamsPage.tsx";
import { PlayersPage } from "./pages/players/PlayersPage/PlayersPage.tsx";
import { MainLayout } from "./pages/layout/MainLayout/MainLayout.tsx";
import { AuthLayout } from "./pages/layout/AuthLayout/AuthLayout.tsx";
import { LogInPage } from "./pages/authorization/LogInPage/LogInPage.tsx";
import { SignUpPage } from "./pages/authorization/SignUpPage/SignUpPage.tsx";
import { RequireAuth } from "./api/helpers/RequireAuth.tsx";
import { store } from "./core/redux/store/store.ts";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage.tsx";
import TeamForm from "./pages/teams/components/TeamForm/TeamForm.tsx";
import PlayerForm from "./pages/players/components/PlayerForm/PlayerForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "teams",
        element: <TeamsPage />,
      },
      {
        path: "teams/add_new_team",
        element: <TeamForm />,
      },
      {
        path: "players",
        element: <PlayersPage />,
      },
      {
        path: "players/add_new_player",
        element: <PlayerForm />,
      },
      {
        path: "editProfile",
        element: <EditProfilePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signIn",
        element: <LogInPage />,
      },
      {
        path: "signUp",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
