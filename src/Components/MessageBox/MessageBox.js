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

                
    
             <input className='inputarea' type ='text' placeholder="Type your message"
             onChange={this.messageHandler} 
             value={this.state.message} rows="3"
             
             />
            
             <button type="submit" class="sendbutton">Send</button>
        </form>
     
   
  );}
}


export default MessageBox;
