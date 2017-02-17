import {
  COMPUTER_SHAPE_SELECTED,
  END_OF_ROUND,
} from '../actions/computer';

const computerReducer = (state = {}, action) => {
  const { payload } = action;
  const newState = { ...state };
  switch (action.type) {
    case COMPUTER_SHAPE_SELECTED:
      newState.computerShape = payload.icon;
      newState.color = payload.color;
      return newState;
    case END_OF_ROUND:
      console.log('state receiv: ', state);
      console.log('payload receiv: ', payload);
    default: return state;
  }
};

export default computerReducer;
