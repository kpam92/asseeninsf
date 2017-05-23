import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
import { retrieveLocations } from './util/location_api_util';
import { receiveLocations } from './actions/location_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  window.retrieveLocations = retrieveLocations;
  window.receiveLocations = receiveLocations;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
