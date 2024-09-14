//  import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/LayoutPage";
import Home from "./pages/HomePage";
import ForumPage from "./pages/ForumPage";
import MatchPage from "./pages/MatchPage";
import MapPage from "./pages/MapPage";
import NoPage from "./pages/NoPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forum" element={<ForumPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="match" element={<MatchPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
