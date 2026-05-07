import React from "react";

function Form({ data, setData }) {
  const updateField = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Resume Form</h2>

      <input name="name" placeholder="Name" value={data.name} onChange={updateField} />
      <input name="email" placeholder="Email" value={data.email} onChange={updateField} />
      <input name="phone" placeholder="Phone" value={data.phone} onChange={updateField} />

      <input name="github" placeholder="GitHub Link" value={data.github} onChange={updateField} />
      <input name="linkedin" placeholder="LinkedIn Link" value={data.linkedin} onChange={updateField} />

      <textarea name="objective" placeholder="Career Objective" value={data.objective} onChange={updateField} />

      <textarea name="technicalSkills" placeholder="Technical Skills (Enter line by line)" value={data.technicalSkills} onChange={updateField} />

      <textarea name="certifications" placeholder="Certifications (Enter line by line)" value={data.certifications} onChange={updateField} />

      <h3>Education</h3>
      {data.education.map((item, i) => (
        <div key={i}>
          <input placeholder="College" value={item.college}
            onChange={(e) => {
              const list = [...data.education];
              list[i].college = e.target.value;
              setData({ ...data, education: list });
            }} />
          <input placeholder="Degree" value={item.degree}
            onChange={(e) => {
              const list = [...data.education];
              list[i].degree = e.target.value;
              setData({ ...data, education: list });
            }} />
          <input placeholder="Year" value={item.year}
            onChange={(e) => {
              const list = [...data.education];
              list[i].year = e.target.value;
              setData({ ...data, education: list });
            }} />
        </div>
      ))}

      <h3>Projects</h3>
      {data.projects.map((item, i) => (
        <div key={i}>
          <input placeholder="Title" value={item.title}
            onChange={(e) => {
              const list = [...data.projects];
              list[i].title = e.target.value;
              setData({ ...data, projects: list });
            }} />
          <input placeholder="Tech" value={item.tech}
            onChange={(e) => {
              const list = [...data.projects];
              list[i].tech = e.target.value;
              setData({ ...data, projects: list });
            }} />
          <textarea placeholder="Description (line by line)" value={item.description}
            onChange={(e) => {
              const list = [...data.projects];
              list[i].description = e.target.value;
              setData({ ...data, projects: list });
            }} />
        </div>
      ))}
    </div>
  );
}

export default Form;