import React from 'react';
import '../styles/SvgBackground.css'; // Make sure to create this CSS file
import BackgroundSVG from "../images/Animated Shape.svg";


const SvgBackground = () => {
  return (
    <div className="background">
      <BackgroundSVG />
    </div>
  );
};

export default SvgBackground;
