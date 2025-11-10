import { createBrowserRouter } from "react-router";
import MainlayOut from "../layout/MainlayOut";
import Home from "../pages/home/Home";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";

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
    ],
  },
]);

export default router;
