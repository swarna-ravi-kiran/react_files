import axios from "axios";
import { useState } from "react";
function RandomUser(){
const [randomuser,setrandomuser] =  useState([])
const [data,setdata] = useState();
const getRandomUsers = ()=>{
axios.get("https://randomuser.me/api/?results=30")
.then((res)=>{
 console.log(res.data.results)
  setrandomuser(res.data.results)
  setdata(res.data.results)
}).catch((error) =>{
    debugger
alert("something went wrong")
console.log(error)
})
}
const filterAll = (event)=>{
    debugger
    if(event.target.id == "all"){
        setrandomuser(data)
    }else if(event.target.id == "male"){
        setrandomuser(data.filter((ele)=> ele.gender === 'male'))
    }else{
        setrandomuser(data.filter((ele)=> ele.gender === 'female'))
    }
}
// const filterMale = ()=>{
// debugger
// setrandomuser(data.filter((ele)=> ele.gender === 'male'))
// }
// const filterAll = ()=>{
//     debugger
//     setrandomuser(data)
// }
// const filterFemale = ()=>{
// debugger
// setrandomuser(data.filter((ele)=> ele.gender === 'female'))
// }

    return(
        <div>
            <h2>Random Users</h2>
            <p>loream jkasdfsjhsdhukjkdsfhsdfjksdjfdsfsdfjsdfdhjdsfdjsdfjdsf
                mbjsadjsfdjkhjdskfhjkjdxfhjkdk
                jkzkjxgfjxvnnnnnnnnnnnnnkljsdfjksdbjjsdgdsjhdfjdfjdfh
                sdhdfhjdsfklhbjkjldjkkldsjkjkjkkjkjksdfjkskjs
                sadjksdfkjdhjsjkjbhdfkjlgjkjkjkdsjkgkjldkljkdjkldkjdfkjd
            </p>
            <button onClick={getRandomUsers}>Get Users</button>
            {
                randomuser.length > 0 && <div
                style={{marginTop:"20px" ,display:"flex" ,justifyContent:"center"}}
                >
                    <div><input type ="radio" name="gender" id="all" defaultChecked onChange={filterAll}/>All</div>
                    <div><input type ="radio" name="gender" id="male" onChange={filterAll}/>MALE</div>
                    <div><input type ="radio" name="gender" id = "female" onChange={filterAll}/>FEMALE</div>
                    </div>
            }
            {
            randomuser.length > 0 ? 
            <table width={1000} style={{margin : "50px  auto"}} cellPadding={10}>
               <thead style={{color:"white"}}>
                <tr bgcolor = "black">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Email</th>
                </tr>
               </thead>
               <tbody>
                {
                    randomuser.map(function(user){
                        return(
                        <tr>
                          <td>
                            <img src={user.picture.medium} width={100} height={100}  alt="user image" style={{borderRadius : "50%"}}></img>
                          </td> 
                          <td>
                            {user.name.first} {user.name.last}
                          </td> 
                          <td>
                            {user.gender}
                          </td>
                        <td>
                            {user.location.city}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        </tr>
                        )
                }
            )
        }
               </tbody>
            </table> 
            : <h2>No  User Data Found.</h2>

            }
        </div> 
    )
}

export default RandomUser;