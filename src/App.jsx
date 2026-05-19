import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthenticationPage from "./pages/AuthenticationPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

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
