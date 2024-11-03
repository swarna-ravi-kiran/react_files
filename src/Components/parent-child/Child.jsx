import React from "react";

function Child(props){  //props = {info = "default data"}
  return (
    <div>
        <h2>
            child component
        </h2>
        <p>child compoent : {props.info}</p>
    </div>
  )
}

export default Child