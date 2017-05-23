import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
import { fetchLocations } from './util/location_api_util';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  window.fetchLocations = fetchLocations;
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
