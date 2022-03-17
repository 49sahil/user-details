import React, { useEffect, useState } from "react";
import "./Profile.css";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PopupExample from "./map";
// import L from'react-leaflet';

function Profile({ props }) {

    var moment = require('moment');
    var after = moment(props?.dob?.date).format("Do MMM YYYY").toString();

    function setValues() {
        setEmail(props.email);
        setUsername(props?.login?.username);
        const pos = [parseFloat(props?.location?.coordinates?.latitude), parseFloat(props?.location?.coordinates?.longitude)];
        // console.log(pos);
        setPost(pos);
        if (pos[0]) {
            setMapshow(PopupExample(pos[0], pos[1]));
        }
    }
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [post, setPost] = useState([]);
    const [Mapshow, setMapshow] = useState("");
    useEffect(setValues, props.email);

    // var L=require('react-leaflet');
    // var map = L.map('map').setView([51.505, -0.09], 13);
    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    // accessToken: 'your.mapbox.access.token'
    // }).addTo(map);
    const [EditUserName, setUserNameShow] = useState(false);
    const [EditEmail, setEmailShow] = useState(false);
    const [EditNameButton, setEdit] = useState("Edit");
    const [EditEmailButton, setEditEmail] = useState("Edit");
    // const [UsernamCursorshow, setUserCursor] =useState(false);
    function setButton() {
        if (EditUserName) {
            setEdit("Start typing your input");
        } else {
            setEdit("Edit");
        }
        if (EditEmail) {
            setEditEmail("Start typing your input");
        } else {
            setEditEmail("Edit");
        }
    }
    useEffect(setButton, [EditUserName]);

    return (
        <div id="nothing">
            <div id="mapCss">{Mapshow}</div>
            {/* <div id="map"></div> */}
            <div id="heading">
                <img src={props?.picture?.medium} />
                <div id="user">{props?.name?.title + " " + props?.name?.first + " " + props?.name?.last}</div>
            </div>
            <div className="middle">
                <div className="left">Username</div>
                <div className="right">
                    <div contentEditable={EditUserName} >{Username} {EditUserName && <span class="blinker"/>}</div>
                    <div>
                        <button onClick={() => { setUserNameShow(true) }} disabled={EditUserName}>{EditNameButton}</button>
                        <button onClick={() => { setUserNameShow(false) }} disabled={!EditUserName} >Save</button>
                    </div>
                </div>
            </div>
            <div className="middle"><div className="left">Gender</div> <div className="right" contentEditable="true"> {props.gender}</div></div>
            <div className="middle"><div className="left">Date of Birth</div> <div className="right"> {after}</div></div>
            <div className="middle"><div className="left">Phone number</div> <div className="right"> {props.phone}</div></div>
            <div className="middle"><div className="left">Address</div> <div className="right"> {props?.location?.street?.number + " " + props?.location?.street?.name + " " + props?.location?.city + " " + props?.location?.state + " " + props?.location?.country + "-" + props?.location?.postcode}</div></div>
            <div className="middle">
                <div className="left">Alternate E-mail</div>
                <div className="right">
                <div contentEditable={EditEmail} >{Email} {EditEmail && <span class="blinker"/>}</div>
                    <div>
                        <button onClick={() => { setEmailShow(true) }} disabled={EditEmail}>{EditEmailButton}</button>
                        <button onClick={() => { setEmailShow(false) }} disabled={!EditEmail} >Save</button>
                    </div>
                </div>
            </div>
            <div className="middle"><div className="left">Coordinates</div> <div className="right"> {post[0] + "       " + post[1]}</div></div>
        </div>
    )
}
export default Profile;