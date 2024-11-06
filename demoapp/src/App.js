import './App.css';
import React, { useState } from 'react';
import Header from './Components/header/Header';
import Main from './Components/main/Main';
import Profile from './Components/profile/Profile';
import Home from './Components/home/Home';
import Nav from './Components/nav/Nav';
import Counter from './Components/counter/Counter';
import Image from './Components/image/Image';
import ProfileCard from './Components/profilecard/ProfileCard';
import List from './Components/list/List';
import UserList from './Components/userList/UserList';
import UserAxios from './Components/axios/UserAxio';
import RandomUser from './Components/raandamUser/RandomUser';
import Parent from './Components/parent-child/Parent.jsx';
import Input from './Components/parent-child/task/Input.js';
import A from './Components/contextapi/A.js';
import Heading from './Components/children/Heading.js';
import SubHeading from './Components/children/SubHeading.js';
import mycontext from './Components/contextapi/ContextApi.js';
import { useContext } from 'react';
import LoginMain from './Components/login-logout-task/LoginMain.js';
import context from './Components/login-logout-task/CredentialContext.js';
import LifeText from './Components/lifecycle/LifeText.jsx';
import LifeImage from './Components/lifecycle/LifeImage.jsx';


function App() { //ikkada customerProvider lo app.js data ni access chesi akkada data ni ikkada bind chesam
          // let customerProvideData = useContext(mycontext)

  return (
    <div className="App">
    <Nav /> 
    <LifeText />
    <LifeImage />
           {/* <LoginMain />  */}
       {/* <h2>{customerProvideData.name}</h2> */}
      {/* <Heading> */}
        {/* <SubHeading />
        this is my first children content */}
        {/* </Heading> */}
      {/* <A /> */}
      {/* <Input /> */}
     {/* <Parent /> */}
      {/* <RandomUser/> */}
    {/* <UserAxios /> */}
      {/* <h2 id = "cssApp">Welcome to  React JS</h2> */}
      {/* <div><Header /></div>
      <div><Main /></div> */}
      {/* <div style = {{display : "flex"}}>
        <Profile name = "swarna" image = "https://tse4.mm.bing.net/th?id=OIP.vf6tqF3ZfAAvJsEqI5-ubgHaLH&pid=Api&P=0&h=180" />
      <Profile name = "ravikiran" image = "https://tse2.mm.bing.net/th?id=OIP.0iG7xinjnxYwduQCGJs1rQHaKX&pid=Api&P=0&h=180"/>
      </div> */}
      {/* <Nav />
      <Home />
      <Counter />
      <Image /> */}
      {/* <ProfileCard /> */}
      {/* <List /> */}
       {/* <UserList /> */}
    </div>
  );
}

export default App;
