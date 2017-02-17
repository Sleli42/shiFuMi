const initialState = {
  scoreList: {
    roundCount: 0,
    humanWins: 0,
    computerWins: 0,
    ties: 0,
    history: [],
  },
  human: {
    humanShape: '',
    color: '',
    win: '',
  },
  computer: {
    computerShape: '',
    color: '',
    win: '',
  },
  currentLoads: 0,
};

export default initialState;
