import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    state = {
        users: [
                {
                id: 1,
                login: "mojombo",
                html_url: "https://github.com/mojombo",
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                },
                { 
                id: 2,   
                login: "defunkt",
                avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                html_url: "https://github.com/defunkt",
                },
                {
                id: 3,
                login: "pjhyett",
                avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
                html_url: "https://github.com/pjhyett",    
                
                }  
        ]
    }
   
    
//creates new props for UserItem with array method
    render() {
        return (
            //userStyle is stored as a var below
            <div style={userStyle}>
               {this.state.users.map(user => ( //"user" 
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
