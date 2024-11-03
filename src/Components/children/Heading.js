import React from "react";

function Heading(props){ //props : {childern:"this is my first children"} ikkada childern anedi property like props
    return(
        <div>
            <h2>Heading Component</h2>
            <h4>{props.children}</h4>
        </div>
    )
}

export default Heading;