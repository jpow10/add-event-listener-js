import React from "react";

export default function Weather() {
    function handleClick() {
        alert("Forecast feature not ready yet");
    }
    
 return <a href="/" onClick={handleClick}>See Forecast</a>;
}