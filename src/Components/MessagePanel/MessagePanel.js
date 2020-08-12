import React, { Component } from 'react';
import DisplayMessages from '../DisplayMessage/DisplayMessage';
import MessageBox from  '../MessageBox/MessageBox';
import Layout from './Layout'
import './MessagePanel.css'

class MessagePanel extends Component {

    state ={
      messages:[]

          }
  
    


          componentDidMount() {
  
          //event listener
          const data= {user: this.props.username, type:'login'}
          this.props.connection.send(JSON.stringify(data))
          this.setState({messages: [...this.state.messages, data]})

          this.props.connection.onmessage = (message) => {
          const data = JSON.parse(message.data)
          this.setState({messages: [...this.state.messages, data]})
          }}
  
      

 sendMessage=(message)=>{


        const data= {user: this.props.username, text: message, type: "message"}
        this.props.connection.send(JSON.stringify(data))
        this.setState({messages: [...this.state.messages, data]})
  
 };
  render(){ 
  return (
    <section className="MessagePanel">
      
      <div className='header'>
      <Layout/>
      </div>
      <DisplayMessages messages={this.state.messages} username={this.props.username} />
      <MessageBox sendMessage={this.sendMessage} username={this.props.username} />
      </section>
  );}
}

export default MessagePanel;
