import "./Counter.css"
import { useState} from "react"
function Counter(){
    const [state,setState] = useState(0);
    // var countValue = 0;
const increaseCount = () =>{
      setState(state + 1)
    // countValue = countValue + 1
    // console.log(countValue)
}

    return(
    <div className ="counter">
        <h2>Counter App</h2>
        <p>Count Value is:{state}</p>
        <button onClick = {increaseCount}>Increase Count</button>
    </div>
    )
}
export default Counter;