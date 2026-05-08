import React, {
  useState,
  useEffect
} from "react";

import "./Builder.css";

import jsPDF from "jspdf";

import html2canvas from "html2canvas";

function Builder() {

  const selectedTemplate =
    localStorage.getItem(
      "selectedTemplate"
    ) || "modern";

  const [resumeData, setResumeData] = useState(() => {

    const saved =
      localStorage.getItem("editResume")
      ||
      localStorage.getItem("resumeData");

    return saved
      ? JSON.parse(saved)
      : {

        name:"",
        email:"",
        phone:"",
        github:"",
        linkedin:"",
        objective:"",
        technicalSkills:"",
        certifications:"",

        education:[
          {
            college:"",
            degree:"",
            year:""
          }
        ],

        projects:[
          {
            title:"",
            tech:"",
            description:""
          }
        ]

      };

  });

  useEffect(() => {

    localStorage.setItem(
      "resumeData",
      JSON.stringify(resumeData)
    );

  }, [resumeData]);

  const handleChange = (e) => {

    setResumeData({

      ...resumeData,

      [e.target.name]:e.target.value

    });

  };

  const saveResume = () => {

    const savedResumes =
      JSON.parse(
        localStorage.getItem("savedResumes")
      ) || [];

    const newResume = {

      id:Date.now(),

      name:
        resumeData.name ||
        "Untitled Resume",

      updated:
        new Date().toLocaleDateString(),

      data:resumeData

    };

    savedResumes.push(newResume);

    localStorage.setItem(
      "savedResumes",
      JSON.stringify(savedResumes)
    );

    alert("Resume Saved Successfully!");

    localStorage.removeItem(
      "editResume"
    );

  };

  const downloadPDF = () => {

    const input =
      document.getElementById("resume-preview");

    html2canvas(input).then((canvas) => {

      const imgData =
        canvas.toDataURL("image/png");

      const pdf =
        new jsPDF("p","mm","a4");

      const imgWidth = 210;

      const imgHeight =
        (canvas.height * imgWidth)
        / canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        imgWidth,
        imgHeight
      );

      pdf.save("resume.pdf");

    });

  };

  return (

    <div className="builder-page">

      <div className="builder-topbar">

        <h1>
          Resume Builder
        </h1>

        <div className="top-buttons">

          <button onClick={saveResume}>
            Save Resume
          </button>

          <button onClick={downloadPDF}>
            Download PDF
          </button>

        </div>

      </div>

      <div className="builder-container">

        <div className="form-section">

          <div className="form-card">

            <h2>
              Personal Information
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={resumeData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={resumeData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={resumeData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="github"
              placeholder="GitHub"
              value={resumeData.github}
              onChange={handleChange}
            />

            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn"
              value={resumeData.linkedin}
              onChange={handleChange}
            />

          </div>

          <div className="form-card">

            <h2>
              Objective
            </h2>

            <textarea
              name="objective"
              placeholder="Write your objective..."
              value={resumeData.objective}
              onChange={handleChange}
            ></textarea>

          </div>

          <div className="form-card">

            <h2>
              Technical Skills
            </h2>

            <textarea
              name="technicalSkills"
              placeholder="Java, React, Spring Boot..."
              value={resumeData.technicalSkills}
              onChange={handleChange}
            ></textarea>

          </div>

        </div>

        <div
          className="preview-section"
          id="resume-preview"
        >

          <div
            className={`resume-paper ${selectedTemplate}`}
          >

            <h1>
              {resumeData.name || "Your Name"}
            </h1>

            <p>
              {resumeData.email}
            </p>

            <p>
              {resumeData.phone}
            </p>

            <p>
              {resumeData.github}
            </p>

            <p>
              {resumeData.linkedin}
            </p>

            <hr />

            <h2>
              Objective
            </h2>

            <p>
              {resumeData.objective}
            </p>

            <hr />

            <h2>
              Technical Skills
            </h2>

            <p>
              {resumeData.technicalSkills}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Builder;