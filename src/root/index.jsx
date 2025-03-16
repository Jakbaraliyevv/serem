import { createBrowserRouter } from "react-router-dom";
import Register from "../components/auth/register";
import Dashboard from "../components/dashboard";
import BenzinZapravkaVisual from "../components/userFace2";
import Login from "../components/auth/login";
import Home from "../pages/home";
import Layout from "../outlet";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "userface2",
        element: <BenzinZapravkaVisual />,
      },
    ],
  },
]);
