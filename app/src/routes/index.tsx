import { Suspense, lazy } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import { BaseLayout } from "../components";

const PageHome = lazy(() => import("../pages/PageHome"));
const PageAbout = lazy(() => import("../pages/PageAbout"));
const PageLogin = lazy(() => import("../pages/PageLogin"));
const PageProfile = lazy(() => import("../pages/PageProfile"));

const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PageHome />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PageAbout />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PageLogin />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PageProfile />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
