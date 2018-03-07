import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import PrimaryButton from './components/elements/buttons/PrimaryButton';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
  }

  render() {
    const childProps = {};

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
            Example React App
          </h1>
        </header>
        <Link to="/">Strona główna</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/list">Lista ofert</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/offer">oferta</Link>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
