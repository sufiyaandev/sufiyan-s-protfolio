import React from "react";
import "./resume.css";
import Cvimg1 from "../images/cv0.jpg";
import Cvimg2 from "../images/cv1.jpg";
import Cvimg3 from "../images/cv2.jpg";

function Resume() {
  return (
    <div className="resume-main">
      <div className="resume-head">
        <span>Resume</span>
        <h2>Resume</h2>
        <p>
          Driven software developer skilled in full-stack development with a
          focus on delivering optimized and scalable solutions
        </p>
      </div>
      <div className="resume-img">
        <img src={Cvimg1} alt="" />
        <img src={Cvimg2} alt="" />
        <img src={Cvimg3} alt="" />
      </div>
    </div>
  );
}

export default Resume;
