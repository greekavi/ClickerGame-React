import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import './Navbar.css';
import Icon from "@material-ui/core/Icon";



function Navbar({onChildClick,childbutton,childLeader,childgame,childmount,childplay}){
    const [leader,setLeader]=useState(false);
    
    function Leaderboardswitch() {
        setLeader(!leader);
    }
    
    return(
<div>

        <div className="heading1">
      <p>Fastest Clicker First<br/>
    {!childplay&& <b>Game Room:{childgame}</b>}</p>
    </div>
      
     {(!childmount)&& <Button id="leaderposition" onClick={Leaderboardswitch}>Leaderboard</Button>}<br/>
     <Button id={childplay?"playbutton":"homebutton"} onClick={onChildClick}>{childbutton}</Button>
{leader&&<div className="Leader2">
<div className="modal">
<div  className="overlay"></div><LeaderBoard leaderboardswitch={Leaderboardswitch} Leadercommon={childLeader} leadergame={childgame}/></div>
</div>}

</div>

    );
}
export default Navbar;