import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
