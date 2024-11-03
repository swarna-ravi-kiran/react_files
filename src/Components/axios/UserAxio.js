import axios from "axios";
import { useState } from "react";
function UserAxios(){
    const [state,setState] = useState([])
    const getUsers = () => {
        debugger
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
        debugger
     console.log(res.data);
     setState(res.data)    //[{},{},{},{},......upto 10 users]
    })
    .catch((error) =>{
     console.log(error.data)
    })
    }
    return (
        <div>
            <h2>
                Axios Example
            </h2>
            <p>
                loream sdafbjdshjdsfbns shjdsfdshasfnhjsdf sdfshbjsf hjkasdfdfhdfhhjhghg<br></br>
                jhasdhffhjjkdsfdshdsfghdsfhjdsfjhdsfjdfhbj vhhjdsffdsgdsfhdsfghsdfghdsfhg<br></br>
                hjashjsadfhjdsfssdfsdfhjdsfhjsdfb sadhjdshgh sajjhsdfhjsdhhjdfhdfhddfdf
            </p>
            <button onClick={getUsers}>Get Users</button>
            {
                state.length > 0 ? <div>
                    <ul>
                {
                    state.map((user) =>{
                        return (
                           <li style={{color : "green"}}>{user.name}</li>
                        )
                    })
                }
                    </ul>
                </div> : <h2 style = {{color : "red",textAlign:"center"}}>No User  Information</h2>
            }
        </div>
    )
}

export  default UserAxios;