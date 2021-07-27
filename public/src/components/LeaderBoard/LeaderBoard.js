import React,{useState,useEffect} from "react";
import firebase from './../Firebase/firebase';
import Button from '@material-ui/core/Button';
import './LeaderBoard.css';
import { useTable } from 'react-table'
import MaterialTable from 'material-table';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableSortLabel } from '@material-ui/core';
import {DataGrid} from '@material-ui/data-grid';


function LeaderBoard({leaderboardswitch,Leadercommon,leadergame}){  
    const [users,setUsers]=useState([]);
    const ref=firebase.firestore().collection("Users");
    const ref1=firebase.firestore().collection("Games");

    const columns = [
        {
          title: 'UserName',
          accessor: 'Username', // accessor is the "key" in the data
        },
        {
          title: 'Score',
          accessor: 'Score',
        },
      ]

    
 
    function getUsers(){

        if(Leadercommon){
        ref.onSnapshot((querySnapshot)=>{
           
            const items=[];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
           
            let sortedData = items.sort((a, b) => b.Score - a.Score)
            setUsers(sortedData);
          
        });}
        else{
        ref1.where("Gameid","==",leadergame).get().then((querySnapshot)=>{
          
          let items=[];
          let array=[]
          querySnapshot.forEach((doc)=>{
              items.push(doc.data());
          });
         
          let use=items[0]
          for(let key in use){ 
            if(!(key=='Gameid' ))
            { 
              array.push(use[key])
            }
          }
         
          let sortedDat1 = array.sort((a, b) => b.Score - a.Score)
          setUsers(sortedDat1);
      });}
       
    }
    useEffect(()=>{
     
        getUsers();
        
     
     
    });

 
     
   

    return(
         <div>       
         <div className="modal-content2">
         <button id="close" onClick={leaderboardswitch}>X</button>
       <div className="leadertable">
       <TableContainer component={Paper}>
         <h2>Leader Board</h2>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell ><b>Username</b></TableCell>
            <TableCell ><b>Score</b></TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.Username}>
              
              <TableCell >{row.Username}</TableCell>
              <TableCell >{row.Score}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </div>
      
       </div></div>
       
      
      
    );
}
export default LeaderBoard;