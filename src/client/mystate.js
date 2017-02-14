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
};
//
// const initialState = {
//   scoreList: {
//     humanWins: 0,
//     computerWins: 0,
//     ties: 0,
//   },
//   humanShape: '',
//   computerShape: 'hand-rock-o',
//   roundCount: 0,
//   history: [],
// };

export default initialState;
