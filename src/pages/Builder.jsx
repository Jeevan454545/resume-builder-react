import React, { useState, useEffect } from "react";
import "./Builder.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";

function Builder() {

const [activeSection, setActiveSection] = useState(1);

const [selectedTemplate, setSelectedTemplate] = useState(
localStorage.getItem("selectedTemplate") || "modern"
);

const [resumeData, setResumeData] = useState({
id: null,
name: "",
role: "",
email: "",
phone: "",
address: "",
github: "",
linkedin: "",
objective: "",
technicalSkills: "",
education: "",
experience: "",
projects: ""
});

useEffect(() => {

const editResume = localStorage.getItem("editResume");

if(editResume){

const parsed = JSON.parse(editResume);

setResumeData({
id: parsed.id || null,
name: parsed.name || "",
role: parsed.role || "",
email: parsed.email || "",
phone: parsed.phone || "",
address: parsed.address || "",
github: parsed.github || "",
linkedin: parsed.linkedin || "",
objective: parsed.objective || "",
technicalSkills: parsed.skills || "",
education: parsed.education || "",
experience: parsed.experience || "",
projects: parsed.projects || ""
});

}

}, []);

const handleChange = (e) => {

setResumeData({
...resumeData,
[e.target.name]: e.target.value
});

};

const saveResume = async () => {

try{

const user = JSON.parse(localStorage.getItem("user"));

const payload = {
name: resumeData.name,
role: resumeData.role,
email: resumeData.email,
phone: resumeData.phone,
address: resumeData.address,
github: resumeData.github,
linkedin: resumeData.linkedin,
objective: resumeData.objective,
skills: resumeData.technicalSkills,
education: resumeData.education,
experience: resumeData.experience,
projects: resumeData.projects
};

if(resumeData.id){

await axios.put(
`http://localhost:1234/api/resumes/${resumeData.id}`,
payload
);

alert("Resume Updated");

}else{

await axios.post(
`http://localhost:1234/api/resumes?userId=${user.id}`,
payload
);

alert("Resume Saved");

}

}catch(error){

console.log(error);
alert("Operation Failed");

}

};

const downloadPDF = () => {

const input = document.getElementById("resume-preview");

html2canvas(input,{
scale:2
}).then((canvas)=>{

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

<div className="sidebar">

<div
className={`step ${activeSection === 1 ? "active" : ""}`}
onClick={() => setActiveSection(1)}
>
1
</div>

<div
className={`step ${activeSection === 2 ? "active" : ""}`}
onClick={() => setActiveSection(2)}
>
2
</div>

<div
className={`step ${activeSection === 3 ? "active" : ""}`}
onClick={() => setActiveSection(3)}
>
3
</div>

<div
className={`step ${activeSection === 4 ? "active" : ""}`}
onClick={() => setActiveSection(4)}
>
4
</div>

<div
className={`step ${activeSection === 5 ? "active" : ""}`}
onClick={() => setActiveSection(5)}
>
5
</div>

<div
className={`step ${activeSection === 6 ? "active" : ""}`}
onClick={() => setActiveSection(6)}
>
6
</div>

</div>

<div className="builder-main">

<div className="form-container">

{activeSection === 1 && (

<div className="form-card">

<h1>Personal Information</h1>

<p>Add your personal details</p>

<div className="grid-2">

<div>
<label>Full Name</label>
<input
type="text"
name="name"
value={resumeData.name}
onChange={handleChange}
/>
</div>

<div>
<label>Job Role</label>
<input
type="text"
name="role"
value={resumeData.role}
onChange={handleChange}
/>
</div>

<div>
<label>Phone</label>
<input
type="text"
name="phone"
value={resumeData.phone}
onChange={handleChange}
/>
</div>

<div>
<label>Email</label>
<input
type="email"
name="email"
value={resumeData.email}
onChange={handleChange}
/>
</div>

</div>

<div className="full-input">

<label>Address</label>

<input
type="text"
name="address"
value={resumeData.address}
onChange={handleChange}
/>

</div>

<div className="grid-2">

<div>
<label>Github</label>
<input
type="text"
name="github"
value={resumeData.github}
onChange={handleChange}
/>
</div>

<div>
<label>LinkedIn</label>
<input
type="text"
name="linkedin"
value={resumeData.linkedin}
onChange={handleChange}
/>
</div>

</div>

</div>

)}

{activeSection === 2 && (

<div className="form-card">

<h1>Career Objective</h1>

<textarea
name="objective"
value={resumeData.objective}
onChange={handleChange}
></textarea>

</div>

)}

{activeSection === 3 && (

<div className="form-card">

<h1>Technical Skills</h1>

<textarea
name="technicalSkills"
value={resumeData.technicalSkills}
onChange={handleChange}
></textarea>

</div>

)}

{activeSection === 4 && (

<div className="form-card">

<h1>Education</h1>

<textarea
name="education"
value={resumeData.education}
onChange={handleChange}
></textarea>

</div>

)}

{activeSection === 5 && (

<div className="form-card">

<h1>Experience</h1>

<textarea
name="experience"
value={resumeData.experience}
onChange={handleChange}
></textarea>

</div>

)}

{activeSection === 6 && (

<div className="form-card">

<h1>Projects</h1>

<textarea
name="projects"
value={resumeData.projects}
onChange={handleChange}
></textarea>

</div>

)}

</div>

<div className="preview-wrapper">

<div className="template-buttons">

<button
onClick={() => setSelectedTemplate("modern")}

>

Modern </button>

<button
onClick={() => setSelectedTemplate("professional")}

>

Professional </button>

<button
onClick={() => setSelectedTemplate("creative")}

>

Creative </button>

</div>

<div
className={`resume-preview ${selectedTemplate}`}
id="resume-preview"
>

<div className="resume-header">

<h1>
{resumeData.name || "Your Name"}
</h1>

<h3>
{resumeData.role || "Profession"}
</h3>

<div className="contact-tags">

<span>
{resumeData.phone || "Phone"}
</span>

<span>
{resumeData.email || "Email"}
</span>

<span>
{resumeData.address || "Address"}
</span>

</div>

</div>

<div className="resume-body">

<div className="resume-section">

<h2>Objective</h2>

<p>{resumeData.objective}</p>

</div>

<div className="resume-section">

<h2>Skills</h2>

<p>{resumeData.technicalSkills}</p>

</div>

<div className="resume-section">

<h2>Education</h2>

<p>{resumeData.education}</p>

</div>

<div className="resume-section">

<h2>Experience</h2>

<p>{resumeData.experience}</p>

</div>

<div className="resume-section">

<h2>Projects</h2>

<p>{resumeData.projects}</p>

</div>

</div>

</div>

<div className="action-buttons">

<button onClick={saveResume}>
Save Resume
</button>

<button onClick={downloadPDF}>
Download PDF
</button>

</div>

</div>

</div>

</div>

);

}

export default Builder;
