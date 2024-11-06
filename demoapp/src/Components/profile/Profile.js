import "./Profile.css"
 function Profile(prop){ //internally it will be (prop{name, id, img})
    return(
        <div id = "profileName">
            <img src = {prop.image} 
            width="400px" 
            hegight = "50px" ></img>
            <h2>{prop.name}</h2>
            <p>Loream50 hjjsbcgjdgghhfnjjdsjhdasfbhjmsdjkdsfjkjsadhsdhjdsfhjd kjkjsdfjkjkdfjkdjkddjjdsfjdfkkdghjkdhg
                kjshgjkdshgsdjkghjdfgjkdsfhds
                jsfgjdsbggjsddddddddddddddddddddddddddddddddddddkjjkfk
            </p>
            <button>Profile Details</button>
        </div>
    )
 }

 export default Profile;