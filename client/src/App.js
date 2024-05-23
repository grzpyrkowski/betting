import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import './css/App.css';
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import Matches from "./pages/Matches";
import UserProfile from "./pages/UserProfile";
import Admin from "./pages/Admin";
import PrivateRoute from "./routes/PrivateRoute";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";
import Bet from "./pages/Bet";
import AdminScore from "./pages/AdminScore";
import Scores from "./pages/Scores";

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/scores" element={<Scores />} />
                <Route element={<AuthenticatedRoute />} >
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/matches/:id/bet" element={<Bet />} />
                    <Route element={<PrivateRoute />} >
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/matches/:id/score" element={<AdminScore />} />
                    </Route>
                </Route>
            </Route>
        )
    );

  return (
      <div className="App h-full text-base md:text-2xl xl:text-3xl xxl:text-4xl 4k:text-6xl">
          <RouterProvider router={router} />
      </div>
  );
}