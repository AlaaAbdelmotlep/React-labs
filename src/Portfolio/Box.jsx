import React from 'react'

function Box(props) {
  return (
    <div>
        <div className="box-container">
            <p>{props.name}</p>
        </div>
    </div>
  )
}

export default Box