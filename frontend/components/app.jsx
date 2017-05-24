import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LocationIndexContainer from './location/location_index_container';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>As Seen in SF</h1>
      </Link>
      
    </header>

      <Route exact path="/" component={ LocationIndexContainer } />
  </div>
);

export default App;
