import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import './Clicker.css';
function Clicker({ClickerCount,ClickerTick}){  
    return(
<div>
<p>You Clicked <b>{ClickerCount}</b> times</p>
          
                          
            <button id="button1"  onClick={ClickerTick}>
            Start Clicking!
      </button>
      </div>
    );
}
export default Clicker;