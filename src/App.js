import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
//conditionals go above return

  return(
    <h1>
      <Navbar />
    </h1>
   );
  }
}

export default App;
