import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Templates from "./pages/Templates";
import Dashboard from "./pages/Dashboard";
import MyResumes from "./pages/MyResumes";
import Settings from "./pages/Settings";
import Builder from "./pages/Builder";
import Reviews
from "./pages/Reviews";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/templates"
          element={<Templates />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/my-resumes"
          element={<MyResumes />}
        />

        <Route
         path="/settings"
         element={<Settings />}
        />

        <Route
          path="/builder"
          element={<Builder />}
        />

        <Route
          path="/reviews"
          element={<Reviews />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;