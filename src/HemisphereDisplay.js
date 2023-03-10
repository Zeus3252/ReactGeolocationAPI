import React from 'react';
import "./Hemisphere.css";
import North from './images/North.png';
import South from './images/North.png';

const hemisphereConfig = {
    Northern: {
        text: "it is northern hemisphere",
        picture: North
    },
    Southern: {
        text: "it is southern hemisphere",
        picture: South
    }
}

const HemisphereDisplay = ({latitude}) => {
    
    const hemisphere = latitude > 0 ? "Northern" : "Southern";
    const {text, picture} = hemisphereConfig[hemisphere]

    return(
        
        <div className = {hemisphere} >
            <div className = "image">
            <img src = {picture} alt = "hemisphere picture"/>
            </div>
            <div className = "ui teal bottom attached label">
           <h1>{text}</h1>
           </div>
    </div>
    
    )
}


export default HemisphereDisplay;