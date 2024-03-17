import React from "react";
import Header from "..//Header/index";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import "./index.css";

const redirectToPrabisha= () => {
  const newURL =
    "https://drive.google.com/file/d/18XaJbL-EQcXZ8xoG-PStZ8_gm0W5kGOw/view?usp=sharing";
  window.open(newURL, "_blank");
};



const Experience = () => (
  <div className="experience">
    <Header />
    <div className="exp-content">
      <div className="new-card">
        <div className="new-card-sections">
          <div className="role-name">
            <h1> Software Engineer Intern </h1>
            <h4>
              {" "}
              <HiOutlineOfficeBuilding />
              &nbsp; Prabisha Consulting{" "}
            </h4>
          </div>
          <div className="middle-line"></div>
          <div className="duration-proof">
            <h2> Feb 2023 - Nov 2023</h2>
            <button onClick={redirectToPrabisha}> Check </button>
          </div>
        </div>
      </div>
      <div className="new-card">
        <div className="new-card-sections">
          <div className="role-name">
            <h1> Automation Tester </h1>
            <h4>
              {" "}
              <HiOutlineOfficeBuilding /> &nbsp; SuperWit{" "}
            </h4>
          </div>
          <div className="middle-line"></div>
          <div className="duration-proof">
            <h2> Feb 2024 - Present</h2>
            <button> Check </button>
          </div>
        </div>
      </div>
      <h2 className="exp-info"> Loading more in future...</h2>
    </div>
  </div>
);

export default Experience;
