import React from "react";
import ProgressBar from "./ProgressBar";
import "./style.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skill-header">
        <h1>Skills</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        ad ratione culpa dolorum rerum minima voluptate eum aperiam dolorem
        architecto, aliquam ipsa perspiciatis consequuntur, tempora iure fugit
        quidem porro, illo quo explicabo. Sunt asperiores facere harum. Adipisci
        incidunt praesentium modi, porro, est voluptatum impedit cupiditate unde
        eligendi iure quod. Repudiandae.
      </p>

      <div className="skills-content">
        <div className="progress">
        <ul>
                <li><ProgressBar title={"Html5"} precentage={"85"}/></li>
                <li><ProgressBar title={"CSS3"} precentage={"90"}/></li>
                <li><ProgressBar title={"JS"} precentage={"80"}/></li>
                <li><ProgressBar title={"React"} precentage={"70"}/></li>
                <li><ProgressBar title={"Node JS"} precentage={"65"}/></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
