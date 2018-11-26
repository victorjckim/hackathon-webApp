import React, { Component } from 'react';
import './App.css';
import Navigation from "../src/components/Navigation"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation/>
            </header>
      </div>
    );
  }
}

export default App;
