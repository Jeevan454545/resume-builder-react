import "./Settings.css";
import { FaUserCircle, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Settings() {

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (

    <div className="settings-page">

      <button
        className="home-btn"
        onClick={() => navigate("/")}
      >
        <FaHome />
        Home
      </button>

      <div className="settings-header">

        <h1>
          Settings
        </h1>

        <p>
          Manage your account settings and preferences.
        </p>

      </div>

      <div className="settings-container">

        <div className="profile-card">

          <FaUserCircle className="profile-icon" />

          <h2>
            {user.name || "User"}
          </h2>

          <p>
            {user.email || "user@gmail.com"}
          </p>

        </div>

        <div className="settings-card">

          <h2>
            Account Settings
          </h2>

          <div className="input-group">

            <label>
              Username
            </label>

            <input
              type="text"
              value={user.name || ""}
              readOnly
            />

          </div>

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              value={user.email || ""}
              readOnly
            />

          </div>

          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              value="123456"
              readOnly
            />

          </div>

          <button>
            Save Changes
          </button>

        </div>

        <div className="settings-card">

          <h2>
            Preferences
          </h2>

          <div className="toggle">

            <span>
              Auto Save Resume
            </span>

            <input type="checkbox" />

          </div>

          <div className="toggle">

            <span>
              Email Notifications
            </span>

            <input type="checkbox" />

          </div>

          <button
            className="logout-btn"
            onClick={() => {

              localStorage.removeItem("user");

              navigate("/login");

            }}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;