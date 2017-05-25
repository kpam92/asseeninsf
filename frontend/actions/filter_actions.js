import { fetchLocations } from './location_actions'

// export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//   dispatch(changeFilter(filter, value));
//   return fetchLocations(getState().filters)(dispatch);
// };
