import "./Dashboard.css";

import {
FaFileAlt,
FaUserCircle,
FaCog,
FaSignOutAlt,
FaLayerGroup,
FaHome
} from "react-icons/fa";

import {
MdDashboard
} from "react-icons/md";

import {
useNavigate,
useLocation
} from "react-router-dom";

function Dashboard() {

const location = useLocation();

const navigate = useNavigate();

const resumes =
JSON.parse(
localStorage.getItem("savedResumes")
) || [];

const user =
JSON.parse(
localStorage.getItem("user")
) || {};

return (


<div className="dashboard">

  <aside className="sidebar">

    <div className="logo">
      ResumeAI
    </div>

    <ul>

      <li
        className={
          location.pathname === "/"
          ? "active"
          : ""
        }
        onClick={() => navigate("/")}
      >
        <FaHome />
        Home
      </li>

      <li
        className={
          location.pathname === "/dashboard"
          ? "active"
          : ""
        }
        onClick={() => navigate("/dashboard")}
      >
        <MdDashboard />
        Dashboard
      </li>

      <li
        className={
          location.pathname === "/my-resumes"
          ? "active"
          : ""
        }
        onClick={() => navigate("/my-resumes")}
      >
        <FaFileAlt />
        My Resumes
      </li>

      <li
        className={
          location.pathname === "/templates"
          ? "active"
          : ""
        }
        onClick={() => navigate("/templates")}
      >
        <FaLayerGroup />
        Templates
      </li>

      <li
        className={
          location.pathname === "/settings"
          ? "active"
          : ""
        }
        onClick={() => navigate("/settings")}
      >
        <FaCog />
        Settings
      </li>

      <li
        onClick={() => {

          localStorage.removeItem("user");

          navigate("/login");

        }}
      >
        <FaSignOutAlt />
        Logout
      </li>

    </ul>

  </aside>

  <main className="main-content">

    <div className="topbar">

      <div>

        <h1>
          Welcome Back
        </h1>

        <p>
          Build and manage your resumes professionally.
        </p>

      </div>

      <div className="profile">

        <FaUserCircle />

        <span>
          {user.name || "User"}
        </span>

      </div>

    </div>

    <div className="stats">

      <div className="stat-card">

        <h2>{resumes.length}</h2>

        <p>Total Resumes</p>

      </div>

      <div className="stat-card">

        <h2>3</h2>

        <p>Templates Available</p>

      </div>

      <div className="stat-card">

        <h2>{resumes.length}</h2>

        <p>Total Downloads</p>

      </div>

    </div>

    <div className="resume-section">

      <div className="section-top">

        <h2>My Resumes</h2>

        <button
          onClick={() => navigate("/templates")}
        >
          Create Resume
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

              </div>

              <h3>
                {resume.name}
              </h3>

              <p>
                Updated {resume.updated}
              </p>

              <div className="buttons">

                <button
                  onClick={() => {

                    localStorage.setItem(
                      "editResume",
                      JSON.stringify(resume.data)
                    );

                    navigate("/builder");

                  }}
                >
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => {

                    const updatedResumes =
                      resumes.filter(
                        (item) =>
                          item.id !== resume.id
                      );

                    localStorage.setItem(
                      "savedResumes",
                      JSON.stringify(updatedResumes)
                    );

                    window.location.reload();

                  }}
                >
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



