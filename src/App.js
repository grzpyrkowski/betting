import './App.css';
import Layout from "./layout/Layout";
import LandingPage from "./landing-page/LandingPage";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
            </Route>
        )
    );

  return (
      <div className="App h-full uppercase text-base xl:text-3xl md:text-2xl">
            <RouterProvider router={router} />
      </div>
  );
}