import React, { Component } from 'react';
import './App.css';

import Login from './Components/Login/Login'
import MessagePanel from './Components/MessagePanel/MessagePanel'





class App extends Component{


  
  state = {
    
    username: null,
    users: []
  }

    setUsername = (username) =>{

      this.setState({username})
      }

    setUsers = (username) =>{

        this.setState({users: [...this.state.users, username]})
        
        }

      connection = new WebSocket('ws://localhost:8080/')
  
    render(){
        return (
            <div className="App">
              {
              !this.state.username ?
                <Login setUsername={this.setUsername} setUsers={this.setUsers}/>
                :
                <MessagePanel className='messagepanel' username = {this.state.username} users={this.state.users} connection={this.connection}/>
              }
            </div>
          );


        
    }
}

export default App;

