import {
  EQUALITY,
  HUMAN_WIN,
  COMPUTER_WIN,
} from '../actions/scoreList';

const scoreListReducer = (state = {}, action) => {
  // console.log('action: ', action);
  // const { payload } = action;
  switch (action.type) {
    case EQUALITY:
      console.log('[eq]state: ', state);
      return state.ties + 1;
    case HUMAN_WIN:
      console.log('[human]state: ', state);
      return state.humanWins + 1;
    case COMPUTER_WIN:
      console.log('[computer]state: ', state);
      return state.computerWins + 1;
    default: return state;
  }
};

export default scoreListReducer;
