import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./screens/home/Home";
import UserProtected from "./routes/UserProtected";
import AdminProtected from "./routes/AdminProtected";
import Trucks from "./screens/trucks/Trucks";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserProtected>
          <Home />
        </UserProtected>
      ),
    },
    {
      path: "/admin",
      element: (
        <AdminProtected>
          <Trucks />
        </AdminProtected>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
