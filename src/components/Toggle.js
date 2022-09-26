import React, {useState} from "react";

function Toggle({fontColor}) {

  const[btnState, changeState] = useState(false);

  function handleButtonState() {
    changeState((btnState) => !btnState);
  }
  const color = btnState ? "red" : "blue";
  return <button onClick={handleButtonState} style={{background:color, color:fontColor, fontWeight:"bold",borderStyle:"none", borderRadius:"10px"}}>{btnState ? "ON" : "OFF"}</button>;
}

export default Toggle;
