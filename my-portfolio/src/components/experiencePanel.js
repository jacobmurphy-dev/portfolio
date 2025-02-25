import React, { useState } from "react";
import "../styles/styles.css";

function ExperiencePanel({
  workplaceName,
  startDate,
  endDate,
  jobTitle,
  companyDescription,
  jobRole,
  images,
}) {
  const [expanded, setExpanded] = useState(false); // Control expanded state

  const toggleExpand = () => {
    setExpanded(!expanded); // Toggle expanded view
  };

  return (
    <div className="work-experience-panel col-6 col-md-6 mx-auto mt-4 pb-4 pt-3 rounded-3 border ">
      <h1 className="fw-bold lh-1 text-body-emphasis pb-2">{workplaceName}</h1>
      <h4>
        {startDate} - {endDate}
      </h4>
      <h4>{jobTitle}</h4>
      <p className="lead">{companyDescription}</p>

      {/* Show additional content if expanded */}
      {expanded && (
        <div className="additional-content mt-3">
          <p>{jobRole}</p>
          <div className="image-gallery"></div>
        </div>
      )}

      <button className="btn btn-link" onClick={toggleExpand}>
        {expanded ? "Show Less" : "Expand"}
      </button>
    </div>
  );
}

export default ExperiencePanel;
