import React from 'react'
import Box from './Box';
import './style.css';

function Portfolio() {
  return (
    <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio-content">
            <ul>
                <li><Box name={"Project 1"}/></li>
                <li><Box name={"Project 2"}/></li>
                <li><Box name={"Project 3"}/></li>
                <li><Box name={"Project 4"}/></li>
                <li><Box name={"Project 5"}/></li>
                <li><Box name={"Project 6"}/></li>
            </ul>
        </div>
    </div>
  )
}

export default Portfolio