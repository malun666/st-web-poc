import { RouterProvider, createHashRouter } from "react-router-dom";

import { BaseLayout } from "../components";
import PageAbout from "../pages/PageAbout";
import PageHome from "../pages/PageHome";
import PageLogin from "../pages/PageLogin";
import PageProfile from "../pages/PageProfile";

const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      {
        path: "about",
        element: <PageAbout />,
      },
      {
        path: "login",
        element: <PageLogin />,
      },
      {
        path: "profile",
        element: <PageProfile />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
