import './css/App.css';
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import Matches from "./pages/Matches";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {UserProvider} from "./contexts/user.context";
import {PrivateRoute} from "./pages/PrivateRoute";

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />} >
                    <Route path="/matches" element={<Matches />} />
                </Route>
            </Route>
        )
    );

  return (
      <div className="App h-full text-base md:text-2xl xl:text-3xl xxl:text-4xl 4k:text-6xl">
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
      </div>
  );
}