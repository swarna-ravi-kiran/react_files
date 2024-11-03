import {useContext} from "react";
import mycontext from "./ContextApi";

function E(){
         let data = useContext(mycontext) //mycontext  lo "ravi" store ayyi vundhi daanini  ikkada access chesam
    return(
        <div>
            <h2>E Component</h2>
            <p style={{fontSize:32 ,color:"green"}}>Name : {data}</p>
        </div>
    )
}

export default E