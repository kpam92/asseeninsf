import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { retrieveLocations, saveLocations, fetchLocationInfo } from './util/location_api_util';
// import { receiveLocations, fetchLocations} from './actions/location_actions';
// import { fetchLocationDetail } from './actions/location_detail_actions';
// import { updateFilter, removeFilter } from './actions/filter_actions';
// import { addFocus, deleteFocus } from './actions/focus_actions';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});


// window.retrieveLocations = retrieveLocations;
// window.fetchLocations = fetchLocations;
// window.fetchLocationDetail = fetchLocationDetail;
// window.fetchLocationInfo = fetchLocationInfo;
// window.receiveLocations = receiveLocations;
// window.saveLocations = saveLocations;
// window.updateFilter = updateFilter;
// window.removeFilter = removeFilter;
// window.addFocus = addFocus;
// window.deleteFocus = deleteFocus;
