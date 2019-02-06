import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header,footer/Header';
import Featured from './components/Featured';
import Info from './components/Info';
import Highlight from './components/Highlights';
import Pricing from './components/Pricing/index';
import Location from './components/Location/index';
import Footer from './components/header,footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px"}}>
        <Header />
        <Element name="featured">
        <Featured />
        </Element>
        
        <Element name="venueinfo">
        <Info />
        </Element>
        
        <Element name="highlights">
        <Highlight />
        </Element>
        
        <Element name="pricing">
        <Pricing />
        </Element>
        
        <Element name="location">
        <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
} 

export default App;
