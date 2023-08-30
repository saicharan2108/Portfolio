import React from "react";
import Header from "..//Header/index";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import "./index.css";

const redirectToGlabbr = () => {
  const newURL =
    "https://drive.google.com/file/d/1X8zVQGBW_jCJpklKvcANs9w4pfLhZH5m/view";
  window.open(newURL, "_blank");
};

const redirectToTnm = () => {
  const newURL =
    "https://drive.google.com/file/d/1LjpQf-0epW7cvGonx4jAaej5D5Gp5g9E/view";
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
              &nbsp; Glabbr Technologies{" "}
            </h4>
          </div>
          <div className="middle-line"></div>
          <div className="duration-proof">
            <h2> Sep 2022 - Jan 2023</h2>
            <button onClick={redirectToGlabbr}> Check </button>
          </div>
        </div>
      </div>
      <div className="new-card">
        <div className="new-card-sections">
          <div className="role-name">
            <h1> Frontend Developer Intern </h1>
            <h4>
              {" "}
              <HiOutlineOfficeBuilding /> &nbsp; The Night Marketer{" "}
            </h4>
          </div>
          <div className="middle-line"></div>
          <div className="duration-proof">
            <h2> Feb 2023 - April 2023</h2>
            <button onClick={redirectToTnm}> Check </button>
          </div>
        </div>
      </div>
      <div className="new-card">
        <div className="new-card-sections">
          <div className="role-name">
            <h1> Software Engineer Intern </h1>
            <h4>
              {" "}
              <HiOutlineOfficeBuilding /> &nbsp; Azgaurd{" "}
            </h4>
          </div>
          <div className="middle-line"></div>
          <div className="duration-proof">
            <h2> Aug 2023 - Present</h2>
            <button> Check </button>
          </div>
        </div>
      </div>
      <h2 className="exp-info"> Loading more in future...</h2>
    </div>
  </div>
);

export default Experience;
