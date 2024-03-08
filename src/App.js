import './App.css';
import Layout from "./layout/Layout";
import LandingPage from "./landing-page/LandingPage";

export default function App() {
  return (
      <div className="App bg-slate-900 text-amber-100">
          <Layout />
          <LandingPage />
      </div>
  );
}