import "./MyResumes.css";

import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaDownload
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function MyResumes() {

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

    <div className="my-resumes-page">

      <div className="top-section">

        <div>

          <h1>
            My Resumes
          </h1>

          <p>
            Manage and edit all your resumes.
          </p>

        </div>

        <button
          onClick={() => navigate("/templates")}
        >
          + Create Resume
        </button>

      </div>

      <div className="search-bar">

        <FaSearch />

        <input
          type="text"
          placeholder="Search resumes..."
        />

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

              <h2>{resume.name}</h2>

              <p>
                Updated {resume.updated}
              </p>

              <div className="actions">

                <button
                  onClick={() => navigate("/builder")}
                >
                  <FaEdit />
                  Edit
                </button>

                <button className="download">

                  <FaDownload />
                  Download

                </button>

                <button className="delete">

                  <FaTrash />
                  Delete

                </button>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default MyResumes;