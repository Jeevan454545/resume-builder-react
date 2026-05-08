import "./LandingPage.css";

import {
  FaFileAlt,
  FaDownload,
  FaLayerGroup,
  FaCheckCircle
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  return (

    <div className="landing-page">

      <nav className="navbar">

        <div
          className="logo"
          onClick={() => navigate("/")}
        >
          ResumeAI
        </div>

        <ul>

          <li
            onClick={() => {

              document
                .getElementById("features")
                .scrollIntoView({
                  behavior:"smooth"
                });

            }}
          >
            Features
          </li>

          <li
            onClick={() =>
              navigate("/templates")
            }
          >
            Templates
          </li>

          <li
            onClick={() =>
              navigate("/reviews")
            }
          >
            Reviews
          </li>

        </ul>

        <button
          onClick={() => navigate("/login")}
        >
          Login
        </button>

      </nav>

      <section className="hero">

        <div className="hero-left">

          <h1>
            Build Professional Resumes
            In Minutes
          </h1>

          <p>
            Create modern and ATS-friendly resumes
            using beautiful templates and
            powerful editing tools.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/login")}
            >
              Start Building
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/templates")}
            >
              View Templates
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="resume-preview">

            <div className="circle"></div>

            <div className="line"></div>

            <div className="line short"></div>

            <div className="box"></div>

            <div className="line"></div>

            <div className="line short"></div>

          </div>

        </div>

      </section>

      <section
        className="features"
        id="features"
      >

        <h2>
          Why Choose ResumeAI?
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <FaFileAlt />

            <h3>
              ATS Friendly
            </h3>

            <p>
              Build resumes optimized for
              hiring systems.
            </p>

          </div>

          <div className="feature-card">

            <FaLayerGroup />

            <h3>
              Modern Templates
            </h3>

            <p>
              Choose from multiple professional
              resume designs.
            </p>

          </div>

          <div className="feature-card">

            <FaDownload />

            <h3>
              Instant Download
            </h3>

            <p>
              Download resumes instantly
              in PDF format.
            </p>

          </div>

        </div>

      </section>

      <section className="templates-section">

        <h2>
          Professional Templates
        </h2>

        <div className="template-showcase">

          <div className="template-box"></div>

          <div className="template-box"></div>

          <div className="template-box"></div>

        </div>

      </section>

      <section className="reviews">

        <h2>
          Trusted By Thousands
        </h2>

        <div className="review-grid">

          <div className="review-card">

            <FaCheckCircle />

            <p>
              Amazing platform for creating
              modern resumes quickly.
            </p>

            <h4>
              Rahul Sharma
            </h4>

          </div>

          <div className="review-card">

            <FaCheckCircle />

            <p>
              Beautiful templates and
              very easy to use.
            </p>

            <h4>
              Priya Verma
            </h4>

          </div>

          <div className="review-card">

            <FaCheckCircle />

            <p>
              Helped me create a professional
              resume for placements.
            </p>

            <h4>
              Aman Gupta
            </h4>

          </div>

        </div>

      </section>

      <footer className="footer">

        <h2>
          ResumeAI
        </h2>

        <p>
          Build resumes smarter and faster.
        </p>

      </footer>

    </div>
  );
}

export default LandingPage;