import React from "react";
import Project from "./project";
import FadeInComponent from "./fadeInComponent";

function uniProject() {
  return (
    <FadeInComponent>
      <div
        className="row mx-auto mt-4 pt-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded"
        style={{ width: "100%", maxWidth: "1920px" }}
      >
        <h1 className="display-6 fw-bold lh-1 text-body-emphasis pb-5">
          Projects
        </h1>
        {/* Project 1 */}
        <Project
          className="universityProject"
          projectTitle={"Mobile Application Development"}
          projectDescription={
            "Description of the project that we created in this class: Online Store using FakeStoreAPI React Native, Redux"
          }
        />
        {/* Project 2 */}
        <project className="universityProject">
          <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-10 fw-bold lh-1 text-body-emphasis pb-2">
              Software Design
            </h2>
            <p className="lead">
              Description of the project that we created in this class: Group
              project, my role was Team Lead. Designing and developing a Tetris
              game in Java.
            </p>
          </div>
        </project>

        {/* Project 3 */}
        <project className="universityProject">
          <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-10 fw-bold lh-1 text-body-emphasis pb-2">
              **Add Third Subject here**
            </h2>
            <p className="lead">
              Description of the project that we created in this class: Group
              project, my role was Team Lead. Designing and developing a Tetris
              game in Java.
            </p>
          </div>
        </project>
      </div>
    </FadeInComponent>
  );
}

export default uniProject;
