import {
  HUMAN_SHAPE_SELECTED,
} from '../actions/human';

const humanReducer = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case HUMAN_SHAPE_SELECTED:
      const newState = { ...state };
      newState.humanShape = payload.icon;
      newState.color = payload.color;
      return newState;
    default: return state;
  }
};

export default humanReducer;
