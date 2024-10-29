import React, { useState, useEffect } from "react";
import "../styles/teamworkEvidence.css";
import FadeInComponent from "./fadeInComponent";

function TeamworkEvidence() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Add an event listener to detect window resize and set the mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FadeInComponent>
      <div
        className="row mx-auto mt-4 pt-5 pb-5 pe-lg-0 pt-lg-5 align-items-center rounded-3"
        style={{ width: "100%", maxWidth: "1920px" }}
      >
        <h1 className="display-6 fw-bold lh-1 text-body-emphasis pb-5">
          Evidence of Teamwork
        </h1>
        <p
          className={`lead text-center ps-5 pe-5 ${
            isMobile && !isExpanded ? "collapsed" : "expanded"
          }`}
        >
          One of our large clients, with approximately 50 employees across two
          levels of their building, experienced issues with their phone and
          internet system. My co-worker and I were tasked with resetting all the
          phones and reconnecting them to the server. We decided to start at
          opposite ends of the first floor, each resetting and reconnecting
          phones as we went.
          <br />
          <br />
          This ensured continuous engagement with the client and efficient use
          of our time. Throughout the process, we maintained constant
          communication with each other and our manager, who monitored the
          phones remotely. During the task, I encountered phones that did not
          reconnect due to firmware issues. My co-worker, experienced with these
          devices, suggested we swap tasks.
          <br />
          <br />
          He updated the firmware while I continued with the remaining phones,
          minimizing downtime. Our communication was generally good but could
          have been better during the final testing phase. After being onsite
          for three hours, we rushed through testing, which led to some phones
          not receiving calls.
          <br />
          <br />
          This issue was not communicated until later when the client reported
          problems. In the end, all phones were reset and reconnected. This
          experience highlighted the importance of thorough testing and clear
          communication, especially under time constraints.
        </p>
        {isMobile && (
          <div className="text-center">
            <button className="btn btn-link" onClick={toggleExpand}>
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        )}
      </div>
    </FadeInComponent>
  );
}

export default TeamworkEvidence;
