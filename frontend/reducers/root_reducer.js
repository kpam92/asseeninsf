import { combineReducers } from 'redux';
import LocationsReducer from './locations_reducer';
import FilterReducer from './filter_reducer';

const rootReducer = combineReducers({
  locations: LocationsReducer,
  bounds: FilterReducer
});

export default rootReducer;
