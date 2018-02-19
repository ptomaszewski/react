import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class OffersList extends Component {
  render() {
    return (
      <div className="mainpage">
        <Helmet>
          <title>React - Lista ofert</title>
          <meta
            name="description"
            content="Lista ofert przykładowej aplikacji napisanej w React"
          />
        </Helmet>
        <p>List</p>
      </div>
    );
  }
}

export default OffersList;
