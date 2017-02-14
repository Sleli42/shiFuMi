import {
  SHAPE_SELECTED,
} from '../actions/';

const shapeReducer = (state = '', action) => {
  const { payload } = action;
  switch (action.type) {
    case SHAPE_SELECTED:
      const newState = { ...state };
      newState.humanShape = payload.shape;
      return newState;
    default: return state;
  }
};

export default shapeReducer;
