import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import Catalog from './containers/Catalog';
import CatalogSearch from './containers/CatalogSearch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Catalog} />
    <Route path="/search" component={CatalogSearch} />
    <Route path="/:category" component={Catalog} />
    <Route path="/:category/:slug" component={Catalog} />
  </Route>
);
