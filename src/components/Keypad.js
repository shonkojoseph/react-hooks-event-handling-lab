// Code Keypad Component Here

import React from "react";

function Keypad (){
    const handleInputChange = () => {
        console.log("Entering password...");
    };
    return (
        

        <input type="password" onChange={handleInputChange} />
    );
}

export default Keypad;