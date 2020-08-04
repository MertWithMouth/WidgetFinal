import React, { Component } from 'react';
import DisplayMessages from '../DisplayMessage/DisplayMessage';
import MessageBox from  '../MessageBox/MessageBox';
import SidePanel from '../SidePanel/SidePanel';
import Layout from './Layout'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MessagePanel.css'





class MessagePanel extends Component {



    
    state={
      messages:[],
      usernames:['mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber',]
      
          }
    

    
    


    
  

  componentDidMount(){
    
    axios.get('http://localhost:8888/restapi/messages')
    .then(response =>{
      this.setState({messages: response.data});
      console.log(this.state.messages)
    })

                 
  }

 


 sendMessage=(mes)=>{

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  const data={
    username: this.props.username,
    text: mes
  };

    axios.post('http://localhost:8888/restapi/messages', data,{
      headers: headers
    })
    .then(response=> {

    console.log(response)
  })
  
  
 };


 createUsers(){

  this.setState({usernames: 
  [...this.state.usernames, this.props.username]})
  
 }
 



  render()
 { 

  
  return (

  
    <div className="MessagePanel">

    <Layout/>
    
      <SidePanel users={this.state.usernames} />
      
      <DisplayMessages messages={this.state.messages} username={this.props.username} />
      
     
      <MessageBox sendMessage={this.sendMessage} username={this.props.username}/>
    
     
      
     
    </div>
  );}
}

export default MessagePanel;
