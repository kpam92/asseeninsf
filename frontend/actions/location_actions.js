import * as APIUtil from '../util/location_api_util'

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocations = locations => ({
  type: RECEIVE_BENCHES,
  locations
});

export const fetchLocations = () => dispatch => (
  APIUtil.fetchLocations(filters).then(locations => (
    dispatch(receiveLocations(locations))
  ))
);
