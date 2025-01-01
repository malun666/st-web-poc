import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BaseLayout } from "../components";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";

const router = createBrowserRouter([
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
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
