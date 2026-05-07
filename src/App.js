import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem("resumeData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          email: "",
          phone: "",
          github: "",
          linkedin: "",
          objective: "",
          technicalSkills: "",
          certifications: "",
          education: [{ college: "", degree: "", year: "" }],
          projects: [{ title: "", tech: "", description: "" }]
        };
  });

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  const downloadPDF = () => {
    const input = document.getElementById("resume-preview");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="container">
      <div className="top-buttons">
        <button onClick={downloadPDF}>Download PDF</button>
      </div>

      <div className="main">
        <Form data={resumeData} setData={setResumeData} />
        <Preview data={resumeData} />
      </div>
    </div>
  );
}

export default App;