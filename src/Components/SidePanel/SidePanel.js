import React, { Component } from 'react';
import Users from './Users'

import './SidePanel.css'


   

 


class SidePanel extends Component{

userHandler=()=>{



}


    render(){
        return (
            <div className="SidePanel">
            <h3>User List</h3>
            <div className='userPanel'>
                {this.props.users.map((user,index) => {
            return(
                
                <Users  key={index} username={user} userHandler={this.userHandler} />
               
            
            )
        })}
        </div>

            </div>
          );


        
    }
}

export default SidePanel;
