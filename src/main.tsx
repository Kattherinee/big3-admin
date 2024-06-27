import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { TeamsPage } from "./pages/teams/TeamsPage";
import { PlayersPage } from "./pages/players/PlayersPage";
import { MainLayout } from "./pages/layout/MainLayout/MainLayout.tsx";

const router = createBrowserRouter([
  //добавляем пути к страничкам
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/teams",
        element: <TeamsPage />,
      },
      {
        path: "/players",
        element: <PlayersPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
