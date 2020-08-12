import React from 'react';
import './DisplayMessage.css';
import Podo from '../../Assets/podo.png';

const message = (props) => (
props.type === 'message' ? 
  
  <div className={props.myusername === props.username ? 'messagerow mymessage' : 'messagerow othermessage'}>
    <img className="msg-img" src={Podo} alt="podo" />
    <div className="messagecontent">
      <div className="messageinfo">
        <div className="userid">{props.username}</div>
        <div className="time">{props.time.toLocaleTimeString().replace(/:\d{2}\s/, ' ')}</div>
      </div>
      <div className="textmessage">{props.text}</div>
    </div>
  </div>

    : (
      <div className="connection">
        <p className="connectioninfo">
        {props.username}
        {' '}
        has joined chat
        </p>
      </div>
    )
);

export default message;
