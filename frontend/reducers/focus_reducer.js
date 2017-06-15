import merge from 'lodash/merge';

import { ADD_FOCUS, DELETE_FOCUS } from '../actions/focus_actions';

const FocusReducer = (state = {}, action) => {
  Object.freeze(state)

  switch(action.type) {
    case ADD_FOCUS:
      return action.focus;
    case DELETE_FOCUS:
      return {};
    default:
      return state;
  }
};

export default FocusReducer;
