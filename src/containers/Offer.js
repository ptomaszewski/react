import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Offer extends Component {
  render() {
    return (
      <div className="mainpage">
        <Helmet>
          <title>React - Oferta</title>
          <meta
            name="description"
            content="Oferta przykładowej aplikacji napisanej w React"
          />
        </Helmet>
        <p>Offer</p>
      </div>
    );
  }
}

export default Offer;
