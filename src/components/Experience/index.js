import React from "react"
import Header from "..//Header/index"
import "../Experience/index.css"
import { Chrono } from "react-chrono";


const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
        type: "IMAGE",
        source: {
            url: "http://someurl/image.jpg"
        }
    },
   
}]

const Experience = () => (
    <div className="experience" style={{height:"200vh"}}>
        <Header />
    <h1> Hey there </h1>
    </div>
)

export default Experience;