import { combineReducers } from 'redux';
import LocationsReducer from './locations_reducer';
import FilterReducer from './filter_reducer';
import LocationDetailReducer from './location_detail_reducer';

const rootReducer = combineReducers({
  locations: LocationsReducer,
  filters: FilterReducer
});

export default rootReducer;
