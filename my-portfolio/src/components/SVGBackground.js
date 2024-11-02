import React from 'react';
import '../styles/SvgBackground.css'; // Make sure to create this CSS file
import { ReactComponent as BackgroundSVG } from "../images/bg-svg.svg"; // Use this for SVGR

const SvgBackground = () => {
  return (
    <div className="background">
      <BackgroundSVG />
    </div>
  );
};

export default SvgBackground;
