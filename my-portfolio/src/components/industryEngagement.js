import React from "react";
import ExperiencePanel from "./experiencePanel";
import "../styles/industryEngagement.css";

function industryEngagement() {
  
  return (
    <div
      className="experienceContainer row mx-auto mt-4 pb-5 pt-5  pe-lg-0 pt-lg-5 align-items-center"
      style={{ width: "100%", maxWidth: "1920px" }}
    >
      <h1 className="display-6 fw-bold lh-1 text-body-emphasis pb-5">
        Evidence of Industry Engagement
      </h1>
      <div className="row align-self-center mx-auto w-50">
        <ExperiencePanel
         
        />
        <ExperiencePanel
         
        />
        <ExperiencePanel
         
        />
      </div>
    </div>
  );
}

export default industryEngagement;
