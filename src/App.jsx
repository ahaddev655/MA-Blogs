import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthenticationPage from "./pages/AuthenticationPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Bookmarks from "./pages/Bookmarks";
import RecentsPage from "./pages/RecentsPage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";

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
      ],
    },
    {
      path: "/auth",
      element: <AuthenticationPage />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
