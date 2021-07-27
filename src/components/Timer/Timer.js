import React,{useState,useEffect} from "react";
import './Timer.css'
function Timer({TimerSeconds}){  
    const [timeOver,setTimeOver]=useState(false);
    const [time,setTime]=useState(true);
    useEffect(()=>{
      
        if(!TimerSeconds)
       {
        setTimeOver(true);
        setTime(false)
       }
        else
        {
        setTime(true);
        setTimeOver(false)
        }
    },[TimerSeconds])
    return(
         <div>
                
        {time&&<b className="Timer">Timer : {TimerSeconds}</b>}
        {timeOver&&  <b className="Timer stop">Time Up!!!</b>}
      </div>
    );
}
export default Timer;