import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import MessagePanel from './Components/MessagePanel/MessagePanel';

class App extends Component{


  
  state = {
    
    username: null,
    error:''
  }

    setUsername = (username) =>{
      if (username.length >15) {
        this.setState({error: "Username is too long"})
    }
    
      else if(username.match(/ /g)){
        this.setState({error: "You cannot use space"})

      }

      else if(username.startsWith("@")){
        this.setState({error: "Username can't start with special character"})

      }


      else{
        this.setState({username})

      }

     
  }


      setUsernameNull=(username)=>{
        this.setState({username})
        this.setState({error: ""})
      }

      connection = new WebSocket('ws://localhost:8080/')
  
    render(){
        return (
            <div className="App">
            
              {
              !this.state.username ?
                <Login setUsername={this.setUsername} setUsers={this.setUsers} error={this.state.error}/>
                :
                <MessagePanel className='messagepanel' username = {this.state.username} users={this.state.users} connection={this.connection} setUsernameNull={this.setUsernameNull}/>
              }
            </div>
          );
 
    }
}

export default App;

