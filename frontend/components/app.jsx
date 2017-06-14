import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SearchContainer from './search/search_container';
import LocationMap from './location_map/location_map';
import Nav from './nav/nav';


const App = () => (
  <div>
    <header>
      <Nav/>
    </header>

      <Route exact path="/" component={ SearchContainer } />
  </div>
);

export default App;
