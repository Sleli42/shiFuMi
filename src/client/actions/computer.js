import 'whatwg-fetch';
import store from '../';
import initialState from '../mystate';
import { equality, humanWin, computerWin } from './scoreList';
import { addLoading, delLoading } from './currentLoads';
import { addHumanWin } from './human';
import { addHistory } from './history';

export const COMPUTER_SHAPE_SELECTED = 'computer/shapeSelected';
export const COMPUTER_WIN_ADDED = 'computer/winAdded';

const whoIsStrongest = (humanShape, computerShape) => (dispatch) => {
  if ((humanShape === 'hand-paper-o' && computerShape === 'hand-rock-o')
  || (humanShape === 'hand-rock-o' && computerShape === 'hand-scissors-o')
  || (humanShape === 'hand-scissors-o' && computerShape === 'hand-paper-o')) {
    dispatch(humanWin());
    dispatch(addHumanWin('Win !'));
    dispatch(addComputerWin('Loose !'));
  } else {
    dispatch(computerWin());
    dispatch(addComputerWin('Win !'));
    dispatch(addHumanWin('Loose !'));
  }
}

const compareShapes = (computerShape) => (dispatch) => {
  const computShape = `hand-${computerShape}-o`;
  const { human, computer, scoreList } = store.getState(initialState);
  console.log( 'human:', human);
  if (human.humanShape === computShape) {
    dispatch(equality());
    dispatch(addComputerWin('Draw !'));
    dispatch(addHumanWin('Draw !'));
  } else {
    dispatch(whoIsStrongest(human.humanShape, computShape));
  }
  dispatch(addHistory(human.humanShape, scoreList.roundCount, computer.computerShape))
};

const computerShapeSelected = (icon, color) => ({
  type: COMPUTER_SHAPE_SELECTED,
  payload: { icon, color },
});

export const computerSelectShape = () => (dispatch) => {
  const { human } = store.getState(initialState);
  const uri = 'https://hook.io/eric-basley/roshambo';
  const params = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  };
  // if (dispatch) {
  //   dispatch(addLoading());
  // }
  fetch(uri, params)
    .then(shape => shape.json())
    .then(shape => dispatch(computerShapeSelected(shape.icon, shape.color)))
    .then(res => dispatch(compareShapes(res.payload.icon)))
    // .then(res => setTimeout(
    //   dispatch(compareShapes(human.humanShape, res.payload.icon))),
    //   5000
    // )
    .catch((error) => {
      // if (dispatch) dispatch(delLoading());
      console.log('ERROR:', error);
    }
  );
};

const addComputerWin = result => ({
  type: COMPUTER_WIN_ADDED,
  payload: result,
});

export default {
  computerSelectShape,
  compareShapes,
  addComputerWin,
};
