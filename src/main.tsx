import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AdvantagesPage } from "./pages/AdvantagesPage";
import { ReviewsPage } from "./pages/ReviewsPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <AdvantagesPage />,
        path: "/advantages",
      },
      {
        element: <ReviewsPage />,
        path: "/reviews",
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
