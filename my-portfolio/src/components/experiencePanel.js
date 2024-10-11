import React from "react";

function experiencePanel({ workplaceName, startDate, endDate, jobTitle }) {
  return (
    <div className="col-3-sm-3 mx-auto mt-4 pb-4 pt-3 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
      <h1 className="fw-bold lh-1 text-body-emphasis pb-2">{workplaceName}</h1>
      <h4>
        {startDate} - {endDate}
      </h4>
      <h4> {jobTitle}</h4>
      <p className="lead">
        {workplaceName} is a leading provider of VR and AR solutions for the
        automotive industry. They have been at the forefront of innovation in
        the field of VR and AR, providing cutting-edge technology and solutions
        to clients worldwide.
      </p>
      <button className="btn btn-link">Read More ...</button>
    </div>
  );
}

export default experiencePanel;
