import { Suspense, lazy } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import { BaseLayout } from "../components";
import { ProtectedRoute } from "../components/ProtectedRoute";

const PageHome = lazy(() => import("../pages/PageHome"));
const PageAbout = lazy(() => import("../pages/PageAbout"));
const PageLogin = lazy(() => import("../pages/PageLogin"));
const PageProfile = lazy(() => import("../pages/PageProfile"));
const PageRegister = lazy(() => import("../pages/PageRegister"));

const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <PageHome />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <PageAbout />
            </ProtectedRoute>
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
        path: "register",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PageRegister />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <PageProfile />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
