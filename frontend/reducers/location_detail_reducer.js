import merge from 'lodash/merge';

import { RECEIVE_LOCATION_DETAIL } from '../actions/location_detail_actions';

const LocationDetailReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_LOCATION_DETAIL:
      return action.location;
    default:
      return state;
  }
};

export default LocationDetailReducer;
