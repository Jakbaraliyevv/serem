import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Register from "../components/auth/register";
import Dashboard from "../components/dashboard";

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
]);
