import React from 'react';
import './Users.css'

const users =(props) => {

    
    

        return (
    <div className="UserList" >

        
        <div className='userid' >@{props.username}</div>
       
     
    </div>
  );
}


export default users;
