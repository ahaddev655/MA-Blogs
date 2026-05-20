import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthenticationPage from "./pages/AuthenticationPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Bookmarks from "./pages/Bookmarks";
import RecentsPage from "./pages/RecentsPage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import UserLayout from "./layouts/UserLayout";
import OverviewPage from "./pages/user/OverviewPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/recents",
          element: <RecentsPage />,
        },
        {
          path: "/category/:category",
          element: <CategoryPage />,
        },
        {
          path: "/blog/:category/:blog-id",
          element: <BlogDetailsPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthenticationPage />,
    },
    {
      path: "/u/",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <OverviewPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
