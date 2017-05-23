import * as APIUtil from '../util/location_api_util'

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const fetchLocations = () => dispatch => (
  APIUtil.retrieveLocations().then(locations => (
    dispatch(saveLocations(locations))
  ))
);

export const saveLocations = (locations) => dispatch => (
  APIUtil.saveLocations(locations)
    .then(locations => dispatch(receiveLocations(locations)))
);
