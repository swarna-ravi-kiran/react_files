import { useState } from "react";
import "./UserList.css"
import Data from "../../data/Data";
function UserList(){
    const [state,setState] = useState([
        {
            name:"swarna",
            city:"kanigir",
            mail:"swarna@gmail.com"
        },
        {
            name:"ravi",
            city:"andhra",
            mail:"ravi@gmail.com"
        },
        {
            name:"kiran",
            city:"nr palli",
            mail:"kiran@gmail.com"
        },
        {
            name:"rohith",
            city:"tumkur",
            mail:"rohith@gmail.com"
        },
        {
            name:"joe",
            city:"vijayawada",
            mail:"joe@gmail.com"
        }
    ])
    const changeToData = (event) =>{
        debugger
    if(event.target.id === "old"){
        setState([
            {
                name:"swarna",
                city:"kanigir",
                mail:"swarna@gmail.com"
            },
            {
                name:"ravi",
                city:"andhra",
                mail:"ravi@gmail.com"
            },
            {
                name:"kiran",
                city:"nr palli",
                mail:"kiran@gmail.com"
            },
            {
                name:"rohith",
                city:"tumkur",
                mail:"rohith@gmail.com"
            },
            // {
            //     name:"joe",
            //     city:"vijayawada",
            //     mail:"joe@gmail.com"
            // }
        ])
    }else{
        setState(Data)
    }
    }
return(
    <div className="user">
    <h2>User Lists</h2>
    <table style={{textAlign : 'center', marginLeft : '500px'}} frame ="box" rules="all" cellPadding={10} width={500}>
<thead>
<tr>
    <th>NAME</th>
    <th>CITY</th>
    <th>EMAIL</th>
</tr>
</thead>
<tbody>
{state.map((data) =>{ //data = { name : "",city: "",mail:""}
return <tr>
    <td>{data.name}</td>
    <td>{data.city}</td>
    <td>{data.mail}</td>
</tr>
})}
</tbody>
    </table>
    <div  style={{textAlign : "center" ,margin : "10px"}}>
        <button id ="new" onClick={changeToData}>New  Users</button> &npsp;&npsp;
        <button id="old" onClick={changeToData}>Old Users</button>
        
    </div>
    </div>
)
}

export default UserList;