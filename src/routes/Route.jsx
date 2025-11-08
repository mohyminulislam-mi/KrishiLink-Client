import { createBrowserRouter } from "react-router";
import MainlayOut from "../layout/MainlayOut";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut />,
    children: [{ index: true, Component: Home }],
  },
]);

export default router;
