import 'whatwg-fetch';

export const HUMAN_SHAPE_SELECTED = 'humanShape/shapeSelected';
export const COMPUTER_SHAPE_SELECTED = 'computerShape/shapeSelected';

const humanShapeSelected = shape => ({
  type: HUMAN_SHAPE_SELECTED,
  payload: shape,
});

const selectHumanShape = shape => (dispatch) => {
  // console.log('[actions]: ', shape);
  dispatch(humanShapeSelected({ shape }));
};

const computerShapeSelected = (shape, color) => ({
  type: COMPUTER_SHAPE_SELECTED,
  payload: { shape, color },
});

const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const paserJson = result => result.json();

const selectComputerShape = () => (dispatch) => {
  const uri = 'https://hook.io/eric-basley/roshambo';
  const params = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  };
  fetch(uri, params)
    .then(checkStatus).then(paserJson)
    .then(res => console.log('res Promise: ', res))
    .catch((error) => {
      console.log('ERROR:', error);
    });
};

export default {
  selectHumanShape,
  selectComputerShape,
};
