export const END_OF_ROUND = 'scoreList/endOfRound';

export const roundEnded = (human, computer) => ({
  type: END_OF_ROUND,
  payload: { human, computer },
});

export const endOfRound = (human, computer) => (dispatch) => {
  dispatch(roundEnded(human, computer));
}

export default {
  endOfRound,
};
