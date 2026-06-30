import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import CommunityHome from "./pages/CommunityHome";
import CommunityFeed from "./pages/CommunityFeed";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Landing />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/communities"
        element={<CommunityHome />}
      />

      <Route
  path="/community-feed/:communityName"
  element={<CommunityFeed />}
/>

    </Routes>
  );
}

export default App;