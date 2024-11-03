import { useState } from "react";
import "./ProfileCard.css"

function ProfileCard(){
    let [profile,setprofile] = useState({
        img:"https://up.yimg.com/ib/th?id=OIP.kLuVl7_2soHqjgecM56X2AHaLL&pid=Api&rs=1&c=1&qlt=95&w=75&h=113",
        username : "ravi",
        gender : "male",
        mail :"ravi@gmail.com",
    })
  let [style,setstyle] = useState({
    backgroundColor : "white",
    color:"black",
    title:"check to dark theme"
  })

const changeToRavi = () =>{
setprofile({
    img:"https://up.yimg.com/ib/th?id=OIP.kLuVl7_2soHqjgecM56X2AHaLL&pid=Api&rs=1&c=1&qlt=95&w=75&h=113",
        username : "ravi",
        gender : "male",
        mail :"ravi@gmail.com",
        // color:"white"
})
}
const changeToGirl = () =>{
    setprofile({
        img:"https://th.bing.com/th/id/OIP.qHch2ev5GjUJDkLFAc7kBAHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            username : "girl",
            gender : "female",
            mail :"female@gmail.com",
            // backgroundColor:"green",
            // color:"white"
    })
}

const changeToColor = (event) =>{
    if(event.target.checked){
        setstyle({
            backgroundColor : "green",
            color:"white",
            title:"uncheck to dark theme"
            
        })
    }else{
        setstyle({
            backgroundColor : "white",
            color:"black",
            title:"check to dark theme"
        })
    }
    
}
    return(
      <div className="MainContainer">
        <h2>Profile Card</h2>
        <div className="profileConatiner" style={{backgroundColor:style.backgroundColor,color:style.color}}>
            <section className="image">
                <img src= {profile.img}
                width= "100%" 
                height="100%" 
                alt="user" />
            </section>
            <section className="description" >
             <dl>
    <dt><b>User Name</b></dt>
    <dd>{profile.username}</dd>
    <dt><b>gender</b></dt>
    <dd>{profile.gender}</dd>
    <dt><b>email id</b></dt>
    <dd>{profile.mail}</dd>
    <dt><b>Description</b></dt>
    <dd>Loream50 jhhhhhhhhhhhhhhhhhcbngdhhsydsgsauidwgbagzbdsfyu jhhjjhgsjkdfyugahdshhfgasyudfyadsgvuyc
        uibacfuayguviesbtuiihbtuveg
        nocauybfusvbyhutwhwuihyhu jhasbd hhg
    </dd>
    <button onClick={changeToRavi}>ravi</button>&nbsp;&npsp;&npsp;
    <button onClick={changeToGirl}>girl</button>
    <br></br>
    <br></br>
    <input type="checkbox" onChange={changeToColor}/>{style.title}
    </dl>
</section>
        </div>
      </div>
    )
}
export default ProfileCard;