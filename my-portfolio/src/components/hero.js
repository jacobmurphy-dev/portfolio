import React from "react";
import "../styles/hero.css";

function hero() {
  return (
    <div className="row ms-5 me-5 p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
          Hi, I'm Jacob
        </h1>
        <p className="lead">
          I'm a passionate and driven student at Griffith University with a
          strong commitment to learning and collaboration. My curiosity fuels my
          desire to explore new technologies and approaches, ensuring I tackle
          challenges with enthusiasm and innovation. I excel at problem-solving
          by viewing situations from multiple perspectives, enabling me to find
          creative, efficient solutions in both academic and professional
          settings.
        </p>
      </div>
      <div className="col-lg-4  offset-lg-1 p-2 overflow-hidden shadow-lg">
        {/*<img
          className="portfolio-Image rounded-lg-3"
          src="../images/jacobmurphy.png"
          alt=""
        />*/}
      </div>
    </div>
  );
}

export default hero;
