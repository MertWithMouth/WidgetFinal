import React, { Component } from 'react';
import Podo from '../../Assets/podo.png'
import './Login.css'

class Login extends Component {
  login=(e)=> {

    e.preventDefault();
    this.props.setUsername(e.target.username.value);
  }

  render() {
    return (
      <div className="LoginPage">
        <div className="wrap">
          <div className="loginOuterContainer">
            <div className="imagecontainer">
              <img className="podoimage" src={Podo} alt="podo" />
            </div>
            <form className="loginform" onSubmit={this.login}>
              <span className="title">Welcome to Jotform Chat</span>
              <div className="logininput">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" placeholder="Username" id="usr" name="username" />
                  
                </div>
                <div className="errormessage">{this.props.error}</div>
              </div>
              <button className="button"><span>Log-In </span></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
