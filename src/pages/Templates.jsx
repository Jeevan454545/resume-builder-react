import "./Templates.css";

import { useNavigate } from "react-router-dom";

function Templates() {

  const navigate = useNavigate();

  const templates = [

    {
      id:1,
      name:"Modern Professional",
      className:"modern"
    },

    {
      id:2,
      name:"Minimal ATS",
      className:"minimal"
    },

    {
      id:3,
      name:"Creative Designer",
      className:"creative"
    },

    {
      id:4,
      name:"Executive Pro",
      className:"executive"
    }

  ];

  return (

    <div className="templates-page">

      <div className="templates-header">

        <h1>
          Choose Your Resume Template
        </h1>

        <p>
          Select a beautiful template and
          start building your professional resume.
        </p>

      </div>

      <div className="templates-grid">

        {
          templates.map((template) => (

            <div
              className="template-card"
              key={template.id}
            >

              <div className={`template-preview ${template.className}`}>

                <div className="top"></div>

                <div className="line"></div>
                <div className="line short"></div>

                <div className="box"></div>

                <div className="line"></div>
                <div className="line short"></div>

              </div>

              <h2>{template.name}</h2>

              <button
                onClick={() => {

                  localStorage.setItem(
                    "selectedTemplate",
                    template.className
                  );

                  navigate("/builder");

                }}
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