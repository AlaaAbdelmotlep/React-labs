import React from 'react'
import './style.css'
function ProgressBar(props) {
  return (
    <div className="our-skills">

        <div className="skillls">
        <div class="skill">
            <h3> {props.title}<span>{props.precentage}</span></h3>
                <div class="the-progress">
                    <span style={{width:props.precentage +"%" ,}}></span>
                </div>
        </div>
        </div>
       
    </div>
  )
}

export default ProgressBar