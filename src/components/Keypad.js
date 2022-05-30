import React from "react";

function Keypad(){
    function changeUp(){
        console.log("Entering password.....")
    }
    return(
        <div>
            <input onChange={changeUp} type="password"></input>
        </div>
    )
}

export default Keypad