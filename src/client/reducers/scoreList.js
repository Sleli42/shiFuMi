import {
  END_OF_ROUND
} from '../actions/scoreList';

const chooseColor = result => {
  if (result === 'win') return '#5cb85c';
  else if (result === 'loose') return '#ff4040';
  else return '#d3a625'
};

const scoreList = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case END_OF_ROUND:
      const { human, computer } = payload;
      const computShape = `hand-${computer.computerShape}-o`;
      const lineHistory = {
        humanShape: human.humanShape,
        humanColor: chooseColor(human.win),
        roundCount: state.roundCount,
        computerShape: computShape,
        computerColor: chooseColor(computer.win),
      };
      state.roundCount += 1;
      if (human.win === 'win') state.humanWins += 1;
      else if (human.win === 'draw') state.ties += 1;
      else state.computerWins += 1;
      state.history = [ ...state.history, lineHistory ];
      return state;
    default: return state;
  }
};

export default scoreList;
