import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/Error/Error";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Profile from "../../pages/profile/Profile";
import RootLayout from "../../pages/root/Root";
import { PrivateRoute } from "./PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
