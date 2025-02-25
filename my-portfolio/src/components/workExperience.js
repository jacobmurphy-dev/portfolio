import React from "react";
import ExperiencePanel from "./experiencePanel";
import "../styles/styles.css";
import FadeInComponent from "./fadeInComponent";
function WorkExperience() {
  const workExperience = [
    {
      workplaceName: "VR Motorsports",
      startDate: "January 2023",
      endDate: "Present",
      jobTitle: "Operations Assistant",
      companyDescription: "VR Motosports is a high class simulator experience.",
      jobRole:
      "At VR Motorsports, software troubleshooting and diagnostics are a key part of my role, ensuring our simulators run smoothly and efficiently. I assist in identifying and resolving technical issues to optimize system performance and enhance the user experience. Additionally, I manage customer interactions, assist with personalized session configurations, and provide high-quality beverage service, including preparing and serving alcoholic beverages and coffee in our bar area.",
    },
    {
      workplaceName: "SDL Technology",
      startDate: "January 2023",
      endDate: "Present",
      jobTitle: "Support Technician",
      companyDescription:
        "SDL Technology is a small company that provides comprehensive IT Services, including networking, security, and maintenance. Along with these services, we also provide Website Development, Web Design services and Hosting.",
      jobRole:
        "In my role at SDL Technology, I am responsible for addressing customer inquiries and efficiently resolving technical issues related to devices and systems. I provide comprehensive support both on-site and remotely, utilizing a range of troubleshooting techniques to ensure optimal system functionality. My experience at SDL has equipped me with hands-on experience in Azure, Docker, IIS, and JavaScript, along with extensive software troubleshooting for both client and internal systems.",
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
    <FadeInComponent>
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
    </FadeInComponent>
  );
}

export default WorkExperience;
