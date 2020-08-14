import React, { Component } from 'react';
import ReactDOM from'react-dom'
import Message from './Message'
import './DisplayMessage.css'


class DisplayMessages extends Component {

  state = {
    time:new Date()
  }

 //will stop auto scrolling down when you send a message
 componentWillUpdate=()=>{
  const node=ReactDOM.findDOMNode(this)
  this.shouldScrollToBottom = node.scrollTop +node.clientHeight + 100 >= node.scrollHeight

};

//Auto scrolls when some client messages
componentDidUpdate=()=>{
  if(this.shouldScrollToBottom) {
    const node= ReactDOM.findDOMNode(this)
    node.scrollTop=node.scrollHeight
  }
}

currentTime(){
this.setState({time: new Date()});
}

componentWillMount(){
  setInterval(()=>this.currentTime(),1000)
}

  render(){
return (
  <main className="DisplayMessage">
      {this.props.messages.map((message, index)=> {
          return(
      
              <Message key={index}
               myusername={this.props.username} 
               text={message.text} 
               username={message.user} 
               time={this.state.time} 
               type={message.type}/>
          )
      })}
  </main>
);}
}

export default DisplayMessages;