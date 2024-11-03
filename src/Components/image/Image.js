import {useState} from "react"
import "./Image.css"

function Image(){
const[image,setimage] = useState("https://www.bing.com/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&w=114&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2")

const changeToReact = () => {
    setimage("https://www.bing.com/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&w=114&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2")
}
const changeToNode = () => {
    setimage("https://th.bing.com/th/id/OIP.3pPJQKaUEdqQUjkWge0M3gHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7")
}
    return(
        <div className = "image">
            <img 
            src= {image} 
            width={300} 
            height={300}>
            </img>
            <br />
            <button onClick={changeToReact}>React</button> &npsp;&npsp;
            <button onClick={changeToNode}>Node</button>
        </div>
    )
}

export default Image;