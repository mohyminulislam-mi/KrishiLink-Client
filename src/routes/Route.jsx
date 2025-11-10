import { createBrowserRouter } from "react-router";
import MainlayOut from "../layout/MainlayOut";
import Home from "../pages/home/Home";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import ForgetPassword from "../Auth/ForgetPassword";
import MyProfile from "../Auth/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut />,
    children: [
      { index: true, Component: Home },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Registration,
      },
       {
        path: "/forget-password",
        Component: ForgetPassword,
      },
        {
        path: "/my-profile",
        Component: MyProfile,
      },
    ],
  },
]);

export default router;
