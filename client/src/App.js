import './css/App.css';
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import Matches from "./pages/Matches";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import UserProfile from "./pages/UserProfile";
import Admin from "./pages/Admin";
import {useState} from "react";

export default function App() {
    const {getPermissions} = useKindeAuth();
    const [user, setUser] = useState(null);

    if (getPermissions().orgCode === "org_5f796b31434") {
        setUser("Admin")
    } else if (getPermissions().orgCode === "org_f3bc7b1be53") {
        setUser("User")
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/profile" element={<UserProfile />} />
                {/*<Route element={<PrivateRoute />} >*/}

                <Route path="/admin" element={<Admin user={user} />} />
                {/*</Route>*/}
            </Route>
        )
    );

  return (
      <div className="App h-full text-base md:text-2xl xl:text-3xl xxl:text-4xl 4k:text-6xl">
          <RouterProvider router={router} />
      </div>
  );
}