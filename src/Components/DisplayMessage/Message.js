import React from 'react';
import './DisplayMessage.css'

const message =(props) => {


  let messageClass = 'message-row';


    if (props.isMyMessage) {
        messageClass += ' you-message';
    } else {
        messageClass += ' other-message';
        
    }

    

        return (
    
      <div className='messageClass'>
        <div className='messagedata'>
            <div className='userid'>{props.username}: {props.text}</div>
            <div className='textmessage'>{props.text}</div>
        </div>
      </div>
    
  );
}


export default message;
