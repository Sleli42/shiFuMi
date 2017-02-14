const initialState = {
  shapes: {
    paper: 'hand-paper-o',
    rock: 'hand-rock-o',
    scissors: 'hand-scissors-o'
  },
  scoreList: {
    humanWins: 1,
    computerWins: 2,
    ties: 0,
  },
  humanShape: '',
  computerShape: 'hand-rock-o',
  roundCount: 4,
  history: [],
};

export default initialState;
