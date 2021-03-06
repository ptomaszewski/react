import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';
import NotFound from './components/NotFound';

const AsyncMainPage = asyncComponent(() => import('./containers/MainPage'));
const AsyncOffersList = asyncComponent(() => import('./containers/OffersList'));
const AsyncOffer = asyncComponent(() => import('./containers/Offer'));

export default ({ childProps }) => (
  <Switch>
    <Route path="/" exact={true} component={AsyncMainPage} />
    <Route path="/list" exact={true} component={AsyncOffersList} />
    <Route path="/offer" exact={true} component={AsyncOffer} />
    <Route component={NotFound} />
  </Switch>
);
