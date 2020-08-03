import React, { Component } from 'react';
import './App.css';

import Login from './Components/Login/Login'
import MessagePanel from './Components/MessagePanel/MessagePanel'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

library.add(faUser)
library.add(faBars)
library.add(faPaperPlane)


class App extends Component{


  
  state = {
    
    username: null
  }

    setUsername = (username) =>{

      this.setState({username})
      }

    
  
    render(){
        return (
            <div className="App">
              {
              !this.state.username ?
                <Login setUsername={this.setUsername}/>
                :
                <MessagePanel className='messagepanel' username = {this.state.username}/>
              }
            </div>
          );


        
    }
}

export default App;

