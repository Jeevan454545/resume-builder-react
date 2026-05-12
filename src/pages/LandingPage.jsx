import "./LandingPage.css";

import {
  FaFileAlt,
  FaDownload,
  FaLayerGroup,
  FaCheckCircle,
  FaStar
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
          onClick={() =>
            navigate("/login")
          }
        >
          Login
        </button>

      </nav>

      <section className="hero">

        <div className="hero-left">

          <h1>
            Build Professional
            Resumes In Minutes
          </h1>

          <p>
            Create modern and ATS-friendly
            resumes using beautiful templates
            and powerful editing tools.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                navigate("/login")
              }
            >
              Start Building
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                navigate("/templates")
              }
            >
              View Templates
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-template-card">

            <div className="hero-template-sidebar">

              <div className="profile-circle"></div>

              <div className="side-line"></div>

              <div className="side-line short"></div>

              <div className="side-box"></div>

              <div className="side-line"></div>

            </div>

            <div className="hero-template-content">

              <div className="template-header">

                <h2>Digvijay Wagare</h2>

                <p>
                  Full Stack Developer
                </p>

              </div>

              <div className="content-line"></div>

              <div className="content-line short"></div>

              <div className="content-box"></div>

              <div className="content-line"></div>

              <div className="content-line short"></div>

              <div className="content-box small"></div>

            </div>

          </div>

        </div>

      </section>

      <section
        className="features"
        id="features"
      >

        <h2>
          Why Choose US?
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <FaFileAlt />
            </div>

            <h3>
              ATS Friendly
            </h3>

            <p>
              Build resumes optimized for
              modern hiring systems.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <FaLayerGroup />
            </div>

            <h3>
              Premium Templates
            </h3>

            <p>
              Beautiful resume templates
              for every profession.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <FaDownload />
            </div>

            <h3>
              Instant PDF
            </h3>

            <p>
              Download resumes instantly
              with one click.
            </p>

          </div>

        </div>

      </section>

      <section className="templates-section">

        <h2>
          Professional Templates
        </h2>

        <div className="template-showcase">

          <div className="landing-template modern">

            <div className="mini-sidebar"></div>

            <div className="mini-content">

              <div className="mini-header"></div>

              <div className="mini-line"></div>

              <div className="mini-line short"></div>

              <div className="mini-box"></div>

            </div>

          </div>

          <div className="landing-template premium">

            <div className="mini-header purple"></div>

            <div className="mini-line"></div>

            <div className="mini-line short"></div>

            <div className="mini-box"></div>

            <div className="mini-line"></div>

          </div>

          <div className="landing-template creative">

            <div className="creative-top"></div>

            <div className="mini-line"></div>

            <div className="mini-box"></div>

            <div className="mini-line short"></div>

          </div>

        </div>

      </section>

      <section className="reviews">

        <h2>
          Trusted By Thousands
        </h2>

        <div className="review-grid">

          <div className="review-card">

            <FaStar />

            <p>
              Amazing platform for creating
              professional resumes quickly.
            </p>

            <h4>
              Vishal Gudase
            </h4>

          </div>

          <div className="review-card">

            <FaStar />

            <p>
              Beautiful templates and
              easy to use interface.
            </p>

            <h4>
              Vaibhav Wagare
            </h4>

          </div>

          <div className="review-card">

            <FaStar />

            <p>
              Helped me create placement-ready
              resume within minutes.
            </p>

            <h4>
              Pratik Jadhav
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