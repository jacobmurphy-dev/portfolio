import React from "react";
import "../styles/hero.css";
import jacobmurphy from "../images/JacobMurphy_Photo.jpg";
import FadeInComponent from "./fadeInComponent";
function hero() {
  return (
    <FadeInComponent>

    <div
      className="row mx-auto mt-5 pb-5 pe-lg-0 pt-lg-5 align-items-center rounded-3 "
      style={{
        width: "90%",
        padding: "2%",
        maxWidth: "1920px",
      }}
    >
      <div className="container-lg col-lg-6 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 mt-3 fw-bold lh-1 text-body-emphasis pb-3">
          Hi, I'm Jacob
        </h1>
        <hr className="mt-3" />
        <br />
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
      <div className="col-lg-4 me-4 offset-lg-1 mt-5">
        <img className="rounded profileIMG" src={jacobmurphy} alt="" />
      </div>
      {/**/}
      </div>
      </FadeInComponent>

  );
}

export default hero;
