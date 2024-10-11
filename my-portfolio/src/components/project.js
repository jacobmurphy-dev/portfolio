import React from "react";

function project({ projectTitle, projectDescription }) {
  return (
    <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
      <h2 className="display-10 fw-bold lh-1 text-body-emphasis pb-2">
        { projectTitle }
      </h2>
      <p className="lead">{projectDescription }</p>
    </div>
  );
}

export default project;
