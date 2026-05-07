import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {

  const navigate = useNavigate();

  return (

    <div className="landing-page">

      <nav>

        <div className="logo">
          ResumeAI
        </div>

        <div className="links">
          <a href="/">Features</a>
          <a href="/">Templates</a>
          <a href="/">About</a>
        </div>

        <button onClick={() => navigate("/login")}>
          Login
        </button>

      </nav>

      <section className="hero">

        <div className="left">

          <div className="tag">
            AI Powered Resume Builder
          </div>

          <h1>
            Build a <span>Professional Resume</span>
            <br />
            in Minutes
          </h1>

          <p>
            Create ATS-friendly resumes with
            premium templates and modern designs.
          </p>

          <div className="buttons">

            <button
              className="start"
              onClick={() => navigate("/login")}
            >
              Start Building
            </button>

            <button
              className="template"
              onClick={() => navigate("/templates")}
            >
              View Templates
            </button>

          </div>

        </div>

        <div className="right">

          <div className="circle"></div>

          <div className="card">

            <h2>Jeevan Patil</h2>

            <p>Full Stack Developer</p>

            <div className="line"></div>
            <div className="line short"></div>

            <h3>Skills</h3>

            <div className="skills">
              <span>Java</span>
              <span>React</span>
              <span>Spring Boot</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default LandingPage;