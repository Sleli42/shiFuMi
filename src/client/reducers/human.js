import {
  HUMAN_SHAPE_SELECTED,
  HUMAN_WIN_ADDED,
} from '../actions/human';

const humanReducer = (state = {}, action) => {
  const { payload } = action;
  // console.log('payload: ', payload);
  const newState = { ...state };
  switch (action.type) {
    case HUMAN_SHAPE_SELECTED:
      newState.humanShape = payload.icon;
      newState.color = payload.color;
      return newState;
    case HUMAN_WIN_ADDED:
      // console.log('payload.result :', payload.result);
      newState.win = payload;
      return newState;
    default: return state;
  }
};

export default humanReducer;
