export const EQUALITY = 'scoreList/equality';
export const HUMAN_WIN = 'scoreList/humanWin';
export const COMPUTER_WIN = 'scoreList/computerWin';

export const equality = () => ({
  type: EQUALITY,
});

export const humanWin = () => ({
  type: HUMAN_WIN,
});

export const computerWin = () => ({
  type: COMPUTER_WIN,
});

export default {
  equality,
  humanWin,
  computerWin,
};
