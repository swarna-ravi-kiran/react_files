import {useState} from "react";
import B from "./B";
import mycontext from "./ContextApi";
function A(){
    const [state,setState] = useState("Ravi")
    const  changedata = ()=>{
        setState("Swarna")
    }
    return(
        <div>
            <h2>A Component</h2>
            <button onClick={ ()=>{ changedata() }}>change data</button>
            <mycontext.Provider value={state}>
            <B />
            </mycontext.Provider>
        </div>
    )
}

export default A