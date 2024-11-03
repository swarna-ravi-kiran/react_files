import { useState } from "react";
import { createContext } from "react";
let   mycontext = createContext()
export default mycontext;

export function  CustomerProvider(props){ //ikkada props ante app.js, app.js ni access chestunnam
    const [state,setState] = useState({name:"swarna",city:"andhra"})
    return <mycontext.Provider value={state}>
   {props.children}  
    </mycontext.Provider>
}