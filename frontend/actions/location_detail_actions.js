import * as APIUtil from '../util/location_api_util'

export const RECEIVE_LOCATION_DETAIL = 'RECEIVE_LOCATION_DETAIL';

export const receiveLocationDetail = location => ({
  type: RECEIVE_LOCATION_DETAIL,
  location
});

export const fetchLocation = (movie,year) => dispatch => (
  APIUtil.fetchLocationInfo(movie,year)
    .then(location => dispatch(receiveLocationDetail(location)))
);
