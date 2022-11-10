import React from "react"
import Header from "..//Header/index"
import "./index.css"
import { BsArrowDownCircle } from "react-icons/bs"
import {FiCheckCircle} from "react-icons/fi"
const Certifications = () => (
    <div className="cerificates" >
    <Header/>
        <div className="content-certificates">
 <h1 className="heading"><span> <BsArrowDownCircle size={20}  /></span> Checkout <span className="span"> Main Cerificates </span>Below <span> <BsArrowDownCircle size={20} /></span> </h1>
        <div className="res-cer">
            <div className="cer-card">
                    <img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084552/Udemy_ewjcmh.jpg" className="cer-img" alt="cer-img" />
                    <div className="skills-cer">
                        <h1 className="info-cer"> Covered </h1>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green" 
                        /> HTML </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> CSS </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Bootstrap </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> MERN </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> GIT and GITHUB</p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Web3 </p>
                        <p className="cer-skill left"> many more... </p>
                    </div>
                </div>
                  <div className="cer-card">
                    <img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084550/NodeJS_ahs6kx.png" className="cer-img" alt="cer-img" />
                    <div className="skills-cer">
                        <h1 className="info-cer"> Covered </h1>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green" 
                        /> Modules in Node.js </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> HTTP Server </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> ExpressJS Server Framework </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> CRUD API's </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> ExpressJS Middlewares</p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> JSON Web Token </p>
                        <p className="cer-skill left"> many more... </p>
                    </div>
                </div>
                       <div className="cer-card">
                    <img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084551/python_tqj7hf.png" className="cer-img" alt="cer-img" />
                    <div className="skills-cer">
                        <h1 className="info-cer"> Covered </h1>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green" 
                        /> Loops & Conditionals </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Lists, Tuples & Sets </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Dictionaries </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Functions & Recursion </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> OOP Concepts</p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Basic Concepts of CL </p>
                        
                        <p className="cer-skill left"> many more... </p>
                    </div>
                </div>
                <div className="cer-card">
                    <img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084550/JS_pjsblz.png" className="cer-img" alt="cer-img" />
                    <div className="skills-cer">
                        <h1 className="info-cer"> Covered </h1>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green" 
                        /> Factory and Constructor </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Prototype and classes </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Asynchronous JS </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Scope & Hoisting </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Array methods</p>
                        <p className="cer-skill left"> many more... </p>
                    </div>
                </div>
           <div className="cer-card">
                    <img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084548/Databases_pq2flb.png" className="cer-img" alt="cer-img" />
                    <div className="skills-cer">
                        <h1 className="info-cer"> Covered </h1>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green" 
                        /> Querying with SQL </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Aggregations and Group By </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Modelling Database </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Joins </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Views and Subqueries</p>
                        <p className="cer-skill left"> many more... </p>
                    </div>
                </div>
                  <div className="cer-card">
                    <img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084547/GIT_AND_GITHUB_apcw5i.png" className="cer-img" alt="cer-img" />
                    <div className="skills-cer">
                        <h1 className="info-cer"> Covered </h1>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green" 
                        /> Fundamentals of CS </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/>Work with command line </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Collaborating with Git </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Linux </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Git and GitHUB </p>
                        <p className="cer-skill left"> many more... </p>
                    </div>
                </div>
                     <div className="cer-card">
                    <img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084553/Static_ifcugy.png" className="cer-img" alt="cer-img" />
                    <div className="skills-cer">
                        <h1 className="info-cer"> Covered </h1>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green" 
                        /> Basics of HTML5, CSS3 </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/>CSS Box Model </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Introduction of Bootstrap and Flex Layout </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Bootstrap Utility Classes and Components </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Layout Development </p>
                        <p className="cer-skill left"> many more... </p>
                    </div>
                </div>
                     <div className="cer-card">
                    <img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084552/responsive_ahglr2.png" className="cer-img" alt="cer-img" />
                    <div className="skills-cer">
                        <h1 className="info-cer"> Covered </h1>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green" 
                        /> Bootstrap Grid System</p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/>CSS Specificity</p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> CSS Cascading and Inheritance </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Bootstrap Flex Utilities</p>
                        <p className="cer-skill left"> many more... </p>
                    </div>
                </div>
                     <div className="cer-card">
                    <img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084548/dynamic_p6nd2h.png" className="cer-img" alt="cer-img" />
                    <div className="skills-cer">
                        <h1 className="info-cer"> Covered </h1>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green" 
                        /> Intro to JS & variables </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/>Arrays and objects </p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> Fetch & Callback</p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> DOM & Event Fundamentals</p>
                        <p className="cer-skill"> <FiCheckCircle className="mark" color="green"/> JSON & Local Storage </p>
                        <p className="cer-skill left"> many more... </p>
                    </div>
                </div>
                <div className="empty">
<img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084552/responsive_ahglr2.png" className="cer-img" alt="cer-img" />                   
                </div>
                <div className="empty">
<img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084560/bootcamp_h1qdv6.png" className="cer-img" alt="cer-img" />                   
                </div>
                <div className="empty">
<img src="https://res.cloudinary.com/jsbsbsbskznznz/image/upload/v1668084567/career_development_qjxldm.png" className="cer-img" alt="cer-img" />                   
                </div>
                
            </div>
            <h2 className="last-cer-info"> Loading more in future.... </h2>
        </div>
    </div>
)

export default Certifications;