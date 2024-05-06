import './css/App.css';
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import Matches from "./pages/Matches";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
import UserProfile from "./pages/UserProfile";

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                {/*<Route element={<PrivateRoute />} >*/}
                <Route path="/matches" element={<Matches />} />
                <Route path="/profile" element={<UserProfile />} />
                {/*</Route>*/}
            </Route>
        )
    );

  return (
      <div className="App h-full text-base md:text-2xl xl:text-3xl xxl:text-4xl 4k:text-6xl">
          <KindeProvider
              clientId="5884f94f7ba44096a63581ab6165a293"
              domain="https://euro2024.kinde.com"
              redirectUri="http://localhost:3000"
              logoutUri="http://localhost:3000"
              >
            <RouterProvider router={router} />
          </KindeProvider>
      </div>
  );
}