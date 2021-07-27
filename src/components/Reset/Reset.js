import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import './Reset.css'
function Reset({ResetGame,ResetEnable}){  
    return(
<div>
<h4>Number of Games played: {ResetGame}</h4>
            <button id="button2" onClick={ResetEnable}>Reset</button>
            
      </div>
    );
}
export default Reset;