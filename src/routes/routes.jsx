import { RouterProvider, createBrowserRouter } from "react-router-dom";

//************************************* Routes *************************************//
       //********************  Show all routes and views *********************/


import Home from "../views/home/Home";
import Error from "../views/error/Error404";
import Login from "../views/login/Login";
import Dashboard from "../views/dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    erroredElement: <Error />,
  },
  {
    path: "/login",
    errorElement: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const myRoutes = () => <RouterProvider router={router} />;

export default myRoutes;
