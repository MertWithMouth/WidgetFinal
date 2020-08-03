import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Podo from '../../Assets/podo.png'
import './Login.css'

import './user-solid.svg'

import './logo.svg'



class Login extends Component{

    login=(e) =>{
    e.preventDefault()
    this.props.setUsername(e.target.username.value)

    }
    
    



    render(){
        return (
            <div className='LoginPage'>
            <div className= 'wrap'>
            <div className="loginOuterContainer">
                <div className="imagecontainer">  
              <img src= {Podo} alt='podo'/>
              </div>

              <form className="loginform" onSubmit={this.login}>  

                    <span className= 'title'>Welcome to Jotform Chat</span>
                    <div className='logininput'>
                        
                    <span className = 'icon'><FontAwesomeIcon icon='user' /></span>
                    <input placeholder='@UserName' type='text'id = 'username'/>
                    
                    </div>
                    <button className='button' ><span>Log-In </span></button>
                </form>
                </div>
            </div>
           </div>
            
          );


        
    }
}

export default Login;
