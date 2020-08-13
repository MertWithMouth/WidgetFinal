import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class Layout extends Component{

    closeHandler=(e)=>{

        e.preventDefault();
       this.props.logout();


    }


    render(){
        return (
            <div className="Layout">
                 <div class="chat-title">JotForm Chat</div>
                 <div>
                 <Button variant="outline-danger" onClick={this.closeHandler}>Log out</Button>{' '}
                 </div>
          
            </div>
        
        )
    }   
    
}

export default Layout;
