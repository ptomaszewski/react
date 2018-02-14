import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PrimaryButton from './components/elements/buttons/primary-button';

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
        <Helmet>
          <title>My App</title>
          <meta name="description" content="moja apka" />
        </Helmet>
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
        <PrimaryButton />
      </div>
    );
  }
}

export default App;
