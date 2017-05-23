import { combineReducers } from 'redux';
import LocationsReducer from './locations_reducer';

const rootReducer = combineReducers({
  locations: LocationsReducer
});

export default rootReducer;
