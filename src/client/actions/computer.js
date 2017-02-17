import 'whatwg-fetch';
import { addLoading, delLoading } from './currentLoads';
import { addHumanWin } from './human';
import { addHistory } from './history';
import { endOfRound } from './scoreList';

export const COMPUTER_SHAPE_SELECTED = 'computer/shapeSelected';
export const END_OF_ROUND = 'endOfRound/endRound';

const whoIsStrongest = (humanShape, computerShape) => {
  if (humanShape === computerShape) return 'draw';
  else if ((humanShape === 'hand-paper-o' && computerShape === 'hand-rock-o')
  || (humanShape === 'hand-rock-o' && computerShape === 'hand-scissors-o')
  || (humanShape === 'hand-scissors-o' && computerShape === 'hand-paper-o')) {
    return 'win';
  } else return 'loose';
};

const compareShapes = () => (dispatch, getState) => {
  const { human, computer } = getState();
  const computShape = `hand-${computer.computerShape}-o`;
  /* define who win */
  human.win = whoIsStrongest(human.humanShape, computShape);
  if (human.win === 'draw') computer.win = 'draw';
  else if (human.win === 'win') computer.win = 'loose';
  else if (human.win === 'loose') computer.win = 'win';
  dispatch(endOfRound(human, computer));
};

const computerShapeSelected = (icon, color) => ({
  type: COMPUTER_SHAPE_SELECTED,
  payload: { icon, color },
});

export const computerSelectShape = () => (dispatch) => {
  const uri = 'https://hook.io/eric-basley/roshambo';
  const params = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  };
  const callAfterTimeout = shape => {
    dispatch(computerShapeSelected(shape.icon, shape.color));
    dispatch(compareShapes());
    dispatch(delLoading());
  };
  if (dispatch) dispatch(addLoading());
  fetch(uri, params)
    .then(shape => shape.json())
    .then(shape => setTimeout(() => callAfterTimeout(shape), 1000))
    .catch((error) => {
      dispatch(delLoading());
      console.log('ERROR:', error);
    }
  );
};

export default {
  computerSelectShape,
  compareShapes,
};
