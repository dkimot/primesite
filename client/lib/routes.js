import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import Catalog from './containers/Catalog';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FilterableTable} />
    <Route path="/about" component={About} />
    <Route path="/products/:category" component={Catalog} />
    <Route path="/products/:category/:slug" component={Catalog} />
  </Route>
);
