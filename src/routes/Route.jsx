import { createBrowserRouter } from "react-router";
import MainlayOut from "../layout/MainlayOut";
import Home from "../pages/home/Home";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import ForgetPassword from "../Auth/ForgetPassword";
import NotFound from "../pages/NotFound";
import AddCrop from "../Dashboard/Admin/Crops/AddCrops";
import AllCrops from "../Dashboard/Admin/Crops/AllCrops";
import MyInterests from "../Dashboard/User/MyInterests";
import MyPosts from "../Dashboard/Admin/MyPosts";
import CropDetails from "../Dashboard/Admin/Crops/CropsDetails";
import PrivateRoute from "./PrivateRoute";
import InterestTableData from "../components/InterestTableData";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../Dashboard/Admin/Overview";
import MyProfile from "../Dashboard/Profile/MyProfile";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

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
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/all-crops",
        element: <AllCrops></AllCrops>,
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
            `https://krishi-link-server-eta.vercel.app/products/${params.id}`,
          ),
        element: <CropDetails></CropDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      { path: "/dashboard", element: <MyProfile /> },
      { path: "/dashboard/my-interests", element: <MyInterests /> },
      { path: "/dashboard/add-crops", element: <AddCrop /> },
      { path: "/dashboard/my-posts", element: <MyPosts /> },
      { path: "/dashboard/overview", element: <Overview /> },
    ],
  },
]);

export default router;
