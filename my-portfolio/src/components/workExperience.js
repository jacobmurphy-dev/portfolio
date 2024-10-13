import React from "react";
import ExperiencePanel from "./experiencePanel";
import "../styles/styles.css";

function WorkExperience() {
    const workExperience = [
      {
        workplaceName: "VR Motorsports",
        startDate: "January 2023",
        endDate: "Present",
        jobTitle: "Operations Assistant",
        companyDescription:"VR Motosports is a high class simulator experience.",
        jobRole:""
      },
      {
        workplaceName: "SDL Technology",
        startDate: "January 2023",
        endDate: "Present",
        jobTitle: "Support Technician",
        companyDescription: "SDL Technology is a small company that provides comprehensive IT Services, including networking, security, and maintenance. Along with these services, we also provide Website Development, Web Design services and Hosting.",
        jobRole: "",
      },
      {
        workplaceName: "ITG Technology",
        startDate: "2021",
        endDate: "2021",
        jobTitle: "Junior Software Developer",
        companyDescription: "",
        jobRole: "",
      },
    ];

  return (
    <div
      className="workExperienceContainer row mx-auto mt-4 pb-5 pt-5  pe-lg-0 pt-lg-5 align-items-center"
      style={{ width: "100%", maxWidth: "1920px" }}
    >
      <h1 className="display-6 fw-bold lh-1 text-body-emphasis pb-5">
        Work Experience
      </h1>
      <div className="row align-self-center mx-auto">
        {workExperience.map((experience, index) => (
          <ExperiencePanel key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
