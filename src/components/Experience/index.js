import React from "react"
import Header from "..//Header/index"
import "./index.css"

const Experience = () => (
    <div className="experience" >
        <Header />
        <div className="exp-content">
            <div className="exp-card">
                <h1 className="exp-head"> Teaching Assistant - <span className="c">NxtWave </span></h1>
                <div className="start-circle">
                    <h3> JULY 2022 </h3>
                    <p className="role"> Teaching Assistant </p>
                </div>
                <hr className="start-line"/>
                <div className="mid-circle">
                    <h3> AUGUST 2022 </h3>
                    <p className="role"> Assiociate Mentor</p>
                </div>
                <hr className="end-line"/>
                <div className="end-circle">
                    <h3> Present </h3>
                    <p className="role"> Assiociate Mentor</p>
                </div>
            </div>
              <div className="exp-card mt">
                <h1 className="exp-head"> Software Engineer Intern - <span className="c">Glabbr</span> </h1>
                <div className="start-circle">
                    <h3> SEPTEMBER 2022 </h3>
                    <p className="role"> SWE </p>
                </div>
                <hr className="start-line"/>
                <div className="mid-circle">
                    <h3> OCTOBER 2022 </h3>
                    <p className="role"> SWE</p>
                </div>
                 <hr className="end-line"/>
                <div className="end-circle">
                    <h3> Present </h3>
                    <p className="role"> SWE</p>
                </div>
            </div>
            <h2 className="exp-info"> Loading more in future...</h2>
     </div>
    </div>
)

export default Experience;