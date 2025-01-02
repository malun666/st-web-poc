import { RouterProvider, createHashRouter } from "react-router-dom";

import { BaseLayout } from "../components";
import PageAbout from "../pages/PageAbout";
import PageHome from "../pages/PageHome";
import PageLogin from "../pages/PageLogin";

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
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
