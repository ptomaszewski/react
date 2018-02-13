import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    alert('Klik');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.test}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.handleClick}>
            Welcome to React
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
