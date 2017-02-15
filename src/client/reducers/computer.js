import {
  COMPUTER_SHAPE_SELECTED,
} from '../actions/computer';

const computerReducer = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case COMPUTER_SHAPE_SELECTED:
      const newState = { ...state };
      newState.computerShape = payload.icon;
      newState.color = payload.color;
      return newState;
    default: return state;
  }
};

export default computerReducer;
