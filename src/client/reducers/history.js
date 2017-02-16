import {
  HISTORY_ADDED,
  HISTORY_UPDATE,
} from '../actions/history';

const historyReducer = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case HISTORY_ADDED:
      return [ ...state, payload ];
    case HISTORY_UPDATE: {
      return state.map((el, id) => {
        if (id === payload.roundCount) {
          return payload;
        }
        return el;
      });
    }
    default: return state;
  }
};

export default historyReducer;
