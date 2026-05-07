import "./Templates.css";
import { useNavigate } from "react-router-dom";

function Templates() {

  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      name: "Modern Professional"
    },

    {
      id: 2,
      name: "Creative Dark"
    },

    {
      id: 3,
      name: "Minimal Clean"
    },

    {
      id: 4,
      name: "Executive"
    }
  ];

  return (

    <div className="templates-page">

      <div className="templates-header">

        <h1>
          Choose Your Resume Template
        </h1>

        <p>
          Select a professional template and
          start building your resume.
        </p>

      </div>

      <div className="templates-grid">

        {
          templates.map((template) => (

            <div
              className="template-card"
              key={template.id}
            >

              <div className="template-preview">

                <div className="resume-top"></div>

                <div className="resume-line"></div>
                <div className="resume-line short"></div>

                <div className="resume-section"></div>

                <div className="resume-line"></div>
                <div className="resume-line short"></div>

              </div>

              <h2>{template.name}</h2>

              <button
                onClick={() => navigate("/builder")}
              >
                Use Template
              </button>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Templates;