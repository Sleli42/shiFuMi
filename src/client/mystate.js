const initialState = {
  scoreList: {
    roundCount: 0,
    humanWins: 0,
    computerWins: 0,
    ties: 0,
  },
  human: {
    humanShape: '',
    color: '',
    win: true,
  },
  computer: {
    computerShape: '',
    color: '',
    win: false,
  },
  history: [],
  currentLoads: 0,
};

export default initialState;
