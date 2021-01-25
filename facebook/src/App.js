import React,{useEffect, useState} from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';

import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const[input,setInput]=useState('');
  const[messages,setMessages]=useState([]);
  const[username,setUsername]=useState('');

  useEffect( () =>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(
        snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
    });
  },[])

 // useState is variable in react
 // useEffect is set condition on run code 
 useEffect( () =>{
   setUsername(prompt('Please Enter Your Name:'))
 }, [] )

  const sendMessage =(event)=>{
    //all logics to send message
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <h1> Hello everyone 🤗🌈</h1>
      <h2> Welcome {username} for chatting</h2>
      <form>
      <FormControl>
      <InputLabel >Enter a message</InputLabel>
      <Input value={input} onChange={event =>setInput(event.target.value)}/>
      <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>
      
      </form>
      <FlipMove>
      {
       messages.map(({id, message}) =>(
         <Message key ={id}username={username} message={message}/>
       ))
      }
      </FlipMove>

    </div>
  );
}

export default App;



