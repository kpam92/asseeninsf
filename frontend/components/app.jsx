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


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>As Seen in SF</h1>
      </Link>

    </header>

      <Route exact path="/" component={ SearchContainer } />
  </div>
);

export default App;
