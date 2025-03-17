import { createBrowserRouter } from "react-router-dom";
import Register from "../components/auth/register";
import Dashboard from "../components/dashboard";
import BenzinZapravkaVisual from "../components/userFace2";
import Login from "../components/auth/login";
import Home from "../pages/home";
import Layout from "../outlet";
import Profile from "../pages/profile";
import Buyurtmalar from "../pages/buyurtmalar";
import OrderPost from "../components/hisobni-toldirish";

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
    path: "dashboard",
    element: <Dashboard />,
  },
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
        path: "profile2",
        element: <BenzinZapravkaVisual />,
      },
      {
        path: "buyurtmalar",
        element: <Buyurtmalar />,
      },
      {
        path: "hisobni-toldirish",
        element: <OrderPost />,
      },

      {
        path: "userface2",
        element: <BenzinZapravkaVisual />,
      },
    ],
  },
]);
