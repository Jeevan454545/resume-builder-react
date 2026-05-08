import "./Settings.css";

import {
  FaUserCircle
} from "react-icons/fa";

function Settings() {

  return (

    <div className="settings-page">

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

          <h2>Jeevan Patil</h2>

          <p>
            jeevan@gmail.com
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
              placeholder="Enter username"
            />

          </div>

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
            />

          </div>

          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Change password"
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

          <button className="logout-btn">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;