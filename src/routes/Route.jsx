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
        Component: ForgetPassword,
      },
      {
        path: "/my-profile",
        Component: MyProfile,
      },
      {
        path: "/add-crops",
        Component: AddCrop,
      },
      {
        path: "/all-crops",
        Component: AllCrops,
      },
      {
        path: "/my-interests",
        Component: MyInterests,
      },
      {
        path: "/my-posts",
        Component: MyPosts,
      },
      {
        path: "/crop-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        Component: CropDetails,
      },
    ],
  },
]);

export default router;
