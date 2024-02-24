import { RouterProvider, createBrowserRouter } from "react-router-dom";

//************************************* Routes *************************************//
//********************  Show all routes and views *********************/
import Home from "../views/home/Home";
import Error from "../views/error404/Error404";
import Login from "../views/login/Login";
import Dashboard from "../views/dashboard/Dashboard";
import Settings from "../views/settings/Settings";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  { path: "settings", element: <Settings /> },
]);

const myRoutes = () => <RouterProvider router={router} />;

export default myRoutes;
