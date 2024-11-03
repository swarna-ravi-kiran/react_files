import { createContext,useState } from "react";

var  context =   createContext()

export default context;

export function CustomCredentialProvider(props){
    const[state,setState] = useState(true)
    return(
    <context.Provider value={ { state, setState} }>
        {props.children}
    </context.Provider>
    )
}