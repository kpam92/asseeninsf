import merge from 'lodash/merge';

import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  {}
});

const FiltersReducer = (state = defaultFilters, action) => {
  Object.freeze(state)
  if (action.type === UPDATE_BOUNDS) {
    const newFilter = {
      [action.filter]: action.value
    };
    return action.bounds;
  } else {
    return state;
  }
};

export default FiltersReducer;
