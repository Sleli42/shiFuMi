export const HISTORY_ADDED = 'history/historyAdded';
export const HISTORY_UPDATE = 'history/historyUpdated';

const historyAdded = (history) => ({
  type: HISTORY_ADDED,
  payload: history,
});

const historyUpdate = (history) => ({
  type: HISTORY_UPDATE,
  payload: history,
});

const chooseColor = humanResult => {
  if (humanResult === 'Win !') {
    return '#63b45c';
  } else if (humanResult === 'Draw !') {
    return '#d4ca65';
  } else if (humanResult === 'Loose !') {
    return '#f67272';
  }
}

export const addColorsHistory = (lineHistory, humanResult, computerResult) => (dispatch) => {
  console.log('line receiv: ', lineHistory);
  const humanColor = chooseColor(humanResult);
  const computerColor = chooseColor(computerResult);
  const newLineHistory = { ...lineHistory, humanColor, computerColor };
  dispatch(historyUpdate(newLineHistory));
};

export const addHistory = (humanShape, roundCount, computerShape) => (dispatch) => {
  const historyRound = { humanShape, roundCount };
  if (!humanShape || !computerShape) return ;
  const computShape = `hand-${computerShape}-o`;
  const history = { ...historyRound, computerShape: computShape };
  // dispatch(addColors(history));
  // console.log('history line:', history);
  dispatch(historyAdded(history));
};

export default {
  addHistory,
  addColorsHistory,
};
