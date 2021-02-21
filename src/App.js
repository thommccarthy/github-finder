import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './Users/Users';
import Search from './Users/Search';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

    //search github users
    searchUsers = async text => {
      this.setState({loading: true });

      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      this.setState({users: res.data.items, loading: false});
    }

//Clear Users
clearUsers = () => this.setState({users:[], loading: false});


  render() {

  return(
    <h1>
      <Navbar />
      <div className="container">
      <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}/>
      <Users loading={this.state.loading} users={this.state.users} />  
      </div>      
    </h1>
   );
  }
}

export default App;
