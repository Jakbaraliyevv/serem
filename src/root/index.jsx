import { createBrowserRouter } from "react-router-dom";
import Register from "../components/auth/register";
import Login from "../components/auth/login";
import Home from "../pages/home";
import Layout from "../outlet";
import Profile from "../pages/profile";
import Buyurtmalar from "../pages/buyurtmalar";
import OrderPost from "../components/hisobni-toldirish";
import PrivateRoute from "../components/privite-router";
export const root = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "buyurtmalar",
            element: <Buyurtmalar />,
          },
          {
            path: "hisobni-toldirish",
            element: <OrderPost />,
          },
        ],
      },
    ],
  },
]);
