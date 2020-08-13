import React, { Component } from 'react';

class Layout extends Component{

    closeHandler=(e)=>{

        e.preventDefault();
       this.props.logout();


    }


    render(){
        return (
            <div className="Layout">
                 <div class="msger-header-title">JotForm Chat</div>
                 <button type="button" class="logoutbutton" onClick={this.closeHandler}>
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </button>
            </div>
        
        )
    }   
    
}

export default Layout;
