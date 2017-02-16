import {
  COMPUTER_SHAPE_SELECTED,
  COMPUTER_WIN_ADDED,
} from '../actions/computer';

const computerReducer = (state = {}, action) => {
  const { payload } = action;
  const newState = { ...state };
  switch (action.type) {
    case COMPUTER_SHAPE_SELECTED:
      newState.computerShape = payload.icon;
      newState.color = payload.color;
      return newState;
    case COMPUTER_WIN_ADDED:
      newState.win = payload;
      return newState;
    default: return state;
  }
};

export default computerReducer;
