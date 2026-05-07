import "./Dashboard.css";

import {
  FaFileAlt,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaLayerGroup
} from "react-icons/fa";

import {
  MdDashboard
} from "react-icons/md";

import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const resumes = [
    {
      id: 1,
      name: "Frontend Developer Resume",
      updated: "2 hours ago"
    },

    {
      id: 2,
      name: "Java Full Stack Resume",
      updated: "Yesterday"
    },

    {
      id: 3,
      name: "React Developer Resume",
      updated: "3 days ago"
    }
  ];

  return (

    <div className="dashboard">

      <aside className="sidebar">

        <div className="logo">
          ResumeAI
        </div>

        <ul>

          <li className="active">
            <MdDashboard />
            Dashboard
          </li>

          <li>
            <FaFileAlt />
            My Resumes
          </li>

          <li>
            <FaLayerGroup />
            Templates
          </li>

          <li>
            <FaCog />
            Settings
          </li>

          <li>
            <FaSignOutAlt />
            Logout
          </li>

        </ul>

      </aside>

      <main className="main-content">

        <div className="topbar">

          <div>

            <h1>
              Welcome Back 👋
            </h1>

            <p>
              Build and manage your resumes.
            </p>

          </div>

          <div className="profile">

            <FaUserCircle />

            <span>
              Jeevan
            </span>

          </div>

        </div>

        <div className="stats">

          <div className="stat-card">

            <h2>12</h2>

            <p>Total Resumes</p>

          </div>

          <div className="stat-card">

            <h2>4</h2>

            <p>Templates Used</p>

          </div>

          <div className="stat-card">

            <h2>18</h2>

            <p>Downloads</p>

          </div>

        </div>

        <div className="resume-section">

          <div className="section-top">

            <h2>My Resumes</h2>

            <button
              onClick={() => navigate("/templates")}
            >
              + Create Resume
            </button>

          </div>

          <div className="resume-grid">

            {
              resumes.map((resume) => (

                <div
                  className="resume-card"
                  key={resume.id}
                >

                  <div className="preview">

                    <div className="line"></div>
                    <div className="line short"></div>

                    <div className="box"></div>

                    <div className="line"></div>
                    <div className="line short"></div>

                  </div>

                  <h3>{resume.name}</h3>

                  <p>
                    Updated {resume.updated}
                  </p>

                  <div className="buttons">

                    <button
                      onClick={() => navigate("/builder")}
                    >
                      Edit
                    </button>

                    <button className="delete">
                      Delete
                    </button>

                  </div>

                </div>
              ))
            }

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;