import AddTask from "./page/AddTask";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-task",
      element: <AddTask />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
