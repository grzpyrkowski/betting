import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
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
import ErrorBoundary from "./pages/ErrorBoundary";

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />} errorElement={<ErrorBoundary />}>
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
      <div className="app">
          <RouterProvider router={router} />
      </div>
  );
}