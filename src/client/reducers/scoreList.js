import {
  EQUALITY,
  HUMAN_WIN,
  COMPUTER_WIN,
} from '../actions/scoreList';

const scoreListReducer = (state = {}, action) => {
  const newState = { ...state };
  newState.roundCount += 1;
  switch (action.type) {
    case EQUALITY:
      newState.ties += 1;
      return newState;
    case HUMAN_WIN:
      newState.humanWins += 1;
      return newState;
    case COMPUTER_WIN:
      newState.computerWins += 1;
      return newState;
    default: return state;
  }
};

export default scoreListReducer;
