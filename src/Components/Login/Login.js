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
              <div className="input-group mb-3">
            <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" class="form-control" placeholder="Username" id="usr" name="username" />
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
