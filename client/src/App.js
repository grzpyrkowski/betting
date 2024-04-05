import './css/App.css';
import Layout from "./layout/Layout";
import LandingPage from "./landing-page/LandingPage";
import Matches from "./matches/Matches";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/matches" element={<Matches />} />
            </Route>
        )
    );

  return (
      <div className="App h-full text-base md:text-2xl xl:text-3xl xxl:text-4xl 4k:text-6xl font-montserrat">
            <RouterProvider router={router} />
      </div>
  );
}