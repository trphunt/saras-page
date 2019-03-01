import React, { Component } from 'react';
import snail from '../assets/images/snail.jpg';
import sara from '../assets/images/sara.jpeg';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Sara Pearl Hunt</span>
              <span className="heading-primary--sub">B.Sc. Biologist</span>
            </h1>
            <div className="header__logo-box">
              <img src={snail} alt="Logo" className="header__logo" />
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
