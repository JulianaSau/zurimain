import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactPage, ErrorPage } from "../pages";

// Onboarding
import LoginPage from "../pages/onboarding/LoginPage";
import SignUpPage from "../pages/onboarding/SignUpPage";
import { LoginLayout } from "@zuri/ui";
import WorkspaceLogin from "../pages/onboarding/WorkspaceLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Home</div>
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  },
  {
    path: "login",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />
      }
    ]
  },
  {
    path: "signup",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SignUpPage />
      }
    ]
  },
  {
    path: "workspace",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WorkspaceLogin />
      }
    ]
  },

  
]);

export default router;
