import { createBrowserRouter } from "react-router";
import MainlayOut from "../layout/MainlayOut";
import Home from "../pages/home/Home";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import ForgetPassword from "../Auth/ForgetPassword";
import MyProfile from "../Auth/MyProfile";
import NotFound from "../pages/NotFound";
import AddCrop from "../pages/Crops/AddCrops";
import AllCrops from "../pages/Crops/AllCrops";
import MyInterests from "../pages/MyInterests";
import MyPosts from "../pages/MyPosts";
import CropDetails from "../pages/Crops/CropsDetails";
import PrivateRoute from "./PrivateRoute";
import InterestTableData from "../components/InterestTableData";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../Dashboard/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut />,
    errorElement: <NotFound />,
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
        element: (
          <PrivateRoute>
            <ForgetPassword></ForgetPassword>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-crops",
        element: (
          <PrivateRoute>
            <AddCrop></AddCrop>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-crops",
        element: <AllCrops></AllCrops>,
      },
      {
        path: "/my-interests",
        element: (
          <PrivateRoute>
            <MyInterests></MyInterests>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posts",
        element: (
          <PrivateRoute>
            <MyPosts></MyPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "/interest-table ",
        element: (
          <PrivateRoute>
            <InterestTableData></InterestTableData>
          </PrivateRoute>
        ),
      },
      {
        path: "/crop-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://krishi-link-server-eta.vercel.app/products/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CropDetails></CropDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ path: "/dashboard/overview", element: <Overview /> }],
  },
]);

export default router;
