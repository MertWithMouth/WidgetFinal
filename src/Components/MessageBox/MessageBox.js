import React, { Component } from 'react';
import './MessageBox.css'


class MessageBox extends Component {

    state={
        message:''
    }

    messageHandler=(e) =>{
        
        this.setState({message: e.target.value})
        
    }

    submitHandler=(e)=>{
        e.preventDefault();
       this.props.sendMessage(this.state.message)
       this.setState({message:''})
       
    }

    
   render(){
        return (
  

        <form className="sendmessageform" onSubmit={this.submitHandler} > 

      
             <input type ='text' placeholder="Type your message"
             onChange={this.messageHandler} 
             value={this.state.message}
             />
             <button type='submit'>Send</button>
        </form>
     
   
  );}
}


export default MessageBox;
