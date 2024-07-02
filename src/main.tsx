import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { TeamsPage } from "./pages/teams/TeamsPage/TeamsPage.tsx";
import { PlayersPage } from "./pages/players/PlayersPage/PlayersPage.tsx";
import { MainLayout } from "./pages/layout/MainLayout/MainLayout.tsx";
import { AuthLayout } from "./pages/layout/AuthLayout/AuthLayout.tsx";
import { LogInPage } from "./pages/authorization/LogInPage/LogInPage.tsx";
import { SignUpPage } from "./pages/authorization/SignUpPage/SignUpPage.tsx";

const router = createBrowserRouter([
  //добавляем пути к страничкам
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "teams",
        element: <TeamsPage />,
      },
      {
        path: "players",
        element: <PlayersPage />,
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
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
