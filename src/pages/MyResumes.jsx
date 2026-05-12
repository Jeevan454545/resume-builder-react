import React, {
  useEffect,
  useState
} from "react";

import "./MyResumes.css";

import axios from "axios";

import {
  useNavigate
} from "react-router-dom";

import { FaHome } from "react-icons/fa";

function MyResumes() {

  const navigate =
    useNavigate();

  const [resumes, setResumes] =
    useState([]);

  useEffect(() => {

    fetchResumes();

  }, []);

  const fetchResumes =
    async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:1234/api/resumes"
        );

      setResumes(
        response.data
      );

    }

    catch(error) {

      console.log(error);

    }

  };

  return (

    <div className="myresumes-page">

      <button
        className="home-btn"
        onClick={() => navigate("/")}
      >
        <FaHome />
        Home
      </button>

      <div className="top-bar">

        <h1>
          My Resumes
        </h1>

        <button
          className="create-btn"
          onClick={() =>
            navigate("/builder")
          }
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

              <h2>
                {resume.name}
              </h2>

              <p>
                {resume.email}
              </p>

              <p>
                {resume.phone}
              </p>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default MyResumes;