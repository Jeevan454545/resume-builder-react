import "./Templates.css";

import {
  FaCheckCircle,
  FaCrown,
  FaFire
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";



function Templates() {

  const navigate = useNavigate();

  const templates = [

    {
      id:1,
      name:"Modern Resume",
      badge:"Popular",
      color:"#0f4c75",
      template:"modern"
    },

    {
      id:2,
      name:"Professional Resume",
      badge:"Premium",
      color:"#8b5cf6",
      template:"professional"
    },

    {
      id:3,
      name:"Creative Resume",
      badge:"Trending",
      color:"#ec4899",
      template:"creative"
    }

  ];

  const selectTemplate = (template) => {

    localStorage.setItem(
      "selectedTemplate",
      template.template
    );

    navigate("/builder");

  };

  return (

    <div className="templates-page">

      <button
        className="home-btn"
        onClick={() => navigate("/")}
      >
        <FaHome />
        Home
      </button>

      <div className="templates-header">

        <h1>
          Choose Your Template
        </h1>

        <p>
          Select a premium resume design
          for your professional career.
        </p>

      </div>

      <div className="templates-grid">

        {
          templates.map((item) => (

            <div
              className="template-card"
              key={item.id}
            >

              <div
                className="template-preview"
              >

                <div className="resume-demo">

                  <div
                    className="left-strip"
                    style={{
                      background:item.color
                    }}
                  >

                    <div className="profile-circle"></div>

                    <div className="small-line"></div>

                    <div className="small-line short"></div>

                    <div className="small-box"></div>

                  </div>

                  <div className="right-content">

                    <div
                      className="header-box"
                      style={{
                        background:item.color
                      }}
                    ></div>

                    <div className="line"></div>

                    <div className="line short"></div>

                    <div className="box"></div>

                    <div className="line"></div>

                    <div className="line short"></div>

                  </div>

                </div>

              </div>

              <div className="template-info">

                <div
                  className="badge"
                  style={{
                    background:item.color
                  }}
                >

                  {
                    item.badge === "Premium"
                    ? <FaCrown />
                    : <FaFire />
                  }

                  {item.badge}

                </div>

                <h2>
                  {item.name}
                </h2>

                <p>
                  ATS Friendly Professional
                  Resume Design
                </p>

                <div className="features">

                  <span>
                    <FaCheckCircle />
                    Live Preview
                  </span>

                  <span>
                    <FaCheckCircle />
                    PDF Download
                  </span>

                  <span>
                    <FaCheckCircle />
                    Modern Layout
                  </span>

                </div>

                <button
                  style={{
                    background:item.color
                  }}
                  onClick={() =>
                    selectTemplate(item)
                  }
                >
                  Use Template
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Templates;
