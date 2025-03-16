import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Register from "../components/auth/register";
import Dashboard from "../components/dashboard";
import UserFace from "../pages/user-face";
import BenzinZapravkaVisual from "../components/userFace2";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/userface2",
    element: <BenzinZapravkaVisual />,
  },
  {
    path: "/userface",
    element: <UserFace />,
  },
]);
