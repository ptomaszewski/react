import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class MainPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Helmet>
          <title>React - Strona Główna</title>
          <meta
            name="description"
            content="Strona główna przykładowej aplikacji napisanej w React"
          />
        </Helmet>
        <p>MainPage</p>
      </div>
    );
  }
}

export default MainPage;
