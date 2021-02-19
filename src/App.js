import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserItem from './Users/UserItem'

class App extends Component {
  render() {
//conditionals go above return

  return(
    <h1>
      <Navbar />
      <UserItem />
    </h1>
   );
  }
}

export default App;
