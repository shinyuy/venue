import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header,footer/Header';
import Featured from './components/Featured';
import Info from './components/Info';
import Highlight from './components/Highlights';
import Pricing from './components/Pricing/index';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px"}}>
        <Header />
        <Featured />
        <Info />
        <Highlight />
        <Pricing />
      </div>
    );
  }
} 

export default App;
