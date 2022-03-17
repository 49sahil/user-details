// import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from "react";
import Profile from "./Profile";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

async function data(){
  let user= await fetch("https://randomuser.me/api/");
  let part= await user.json();
  return part.results[0];
}

// function getdata() {
//   console.log("getdata started");
//   fetch("https://randomuser.me/api/").then((response) => {
//     console.log("inside first then");
//     return response.json();
//   }).then((data) => {
//     console.log("inside second then");
//     console.log(data["results"][0]);
//     return data;
//   }).then(response => {
//     console.log("inside third then");
//     return response;
//   })
// }



function App() {
  // async function give(){
  //   const ans=await data();
  //   const {gender,phone,email}=await ans;
  //   console.log(ans);
  //   return {gender,phone,email};
  // }
  // const {gender,phone,email}=give();

  const[userData, setUserData] = useState({});
  // const [userName, setUserName] = useState('');

  // function setDetails(){
  //   console.log(userData);
  //   setUserName(userData?.name?.title + " " + userData?.name?.first + " " + userData?.name?.last);
  // }
  useEffect(()=>{
    async function fetchData(){
      let tempUserData = await data();
      setUserData(tempUserData);
    }
    fetchData();
  },[]);
  // useEffect(setDetails, [userData]);
  // const {gender,phone,email,login}=users;
  // console.log(users["login"]);
  // function makeprofile(finall){
  //   <Profile name={finall.name}  gender={finall.gender} dob={finall.dob} phone={finall.phone} address={finall.address}/>
  // }
  // const [showing, setShowing] = useState(datasource);
  // console.log("before starting getdata");
  // setShowing(getdata());
  // console.log("after starting getdata");
  // const { gender, phone, email, login, nat } = showing["results"][0];
  // const position = [51.505, -0.09];
  return (
    // <MapContainer center={position} zoom={13}>
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <Marker position={position}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker>
    // </MapContainer>
    <Profile props={userData}/>
    // <div id="nothing">
    //   <div>{userData.gender}</div>
    //   <div>{userData?.name?.title + " " + userData?.name?.first + " " + userData?.name?.last}</div>
    //   <div>{userData.phone}</div>
    //   <div>{userData.email}</div>
    //   <div>{userData.nat}</div>
    //   <div>{userData?.login?.username}</div>
    // </div>
  );
}

export default App;
