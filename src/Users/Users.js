import React from 'react';
import UserItem from './UserItem';
import Spinner from '../components/layout/Spinner'
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => { 
      if(loading) {
        return <Spinner />
      }  else {
            //creates new props for UserItem with array method   
            return (
                //userStyle is stored as a var below
                <div style={userStyle}>
                   {users.map(user => ( //"user" 
                       <UserItem key={user.id} user={user}/>
                   ))} 
                </div>
            );
        }    
    
} 

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

//note commas vs semicolons
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
