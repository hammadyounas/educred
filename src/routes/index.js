import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignUpWithEmail from "../pages/SignUpWithEmail";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import LoginWithEmail from "../pages/LoginWithEmail";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "signup/email",
    element: <SignUpWithEmail />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "login/email",
    element: <LoginWithEmail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/settings",
    element: <Settings />
  }
]);
