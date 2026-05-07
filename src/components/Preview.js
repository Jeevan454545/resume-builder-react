import React from "react";

function Preview({ data }) {
  return (
    <div id="resume-preview" className="preview-container">
      <div className="resume-header">
        <h1>{data.name}</h1>
        <p>{data.email} | {data.phone}</p>
        <p>{data.github}</p>
        <p>{data.linkedin}</p>
      </div>

      <div className="resume-body">
        <div className="left">
          <div className="section">
            <h3>Technical Skills</h3>
            <ul>
              {data.technicalSkills.split("\n").map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>Certifications</h3>
            <ul>
              {data.certifications.split("\n").map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="section">
            <h3>Career Objective</h3>
            <p>{data.objective}</p>
          </div>

          <div className="section">
            <h3>Education</h3>
            {data.education.map((item, i) => (
              <div key={i}>
                <p><strong>{item.degree}</strong></p>
                <p>{item.college}</p>
                <p>{item.year}</p>
              </div>
            ))}
          </div>

          <div className="section">
            <h3>Projects</h3>
            {data.projects.map((item, i) => (
              <div key={i}>
                <p><strong>{item.title}</strong></p>
                <p>{item.tech}</p>
                <ul>
                  {item.description.split("\n").map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;