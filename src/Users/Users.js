import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    
        
    
   
    
//creates new props for UserItem with array method
    render() {
        return (
            //userStyle is stored as a var below
            <div style={userStyle}>
               {this.props.users.map(user => ( //"user" 
                   <UserItem key={user.id} user={user}/>
               ))} 
            </div>
        )
    }
}

//note commas vs semicolons
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
