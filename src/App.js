import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ResumeBuilder from "./pages/ResumeBuilder";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Templates from "./pages/Templates";
import Dashboard from "./pages/Dashboard";

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
          path="/builder"
          element={<ResumeBuilder />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;