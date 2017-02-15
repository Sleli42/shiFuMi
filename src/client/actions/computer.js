import 'whatwg-fetch';
import store from '../';
import initialState from '../mystate';
import { equality, humanWin, computerWin } from './scoreList';
import { addLoading, delLoading } from './currentLoads';

export const COMPUTER_SHAPE_SELECTED = 'computerShape/shapeSelected';

const whoIsStrongest = (humanShape, computerShape) => (dispatch) => {
  if ((humanShape === 'hand-paper-o' && computerShape === 'hand-rock-o')
  || (humanShape === 'hand-rock-o' && computerShape === 'hand-scissors-o')
  || (humanShape === 'hand-scissors-o' && computerShape === 'hand-paper-o')) {
    console.log('here Human WIN');
    dispatch(humanWin());
  } else {
    console.log('here COMPUTER WIN');
    dispatch(computerWin());
  }
}

const compareShapes = (humanShape, computerShape) => (dispatch) => {
  // const { humanShape } = human;
  // const { computerShape } = computer;
  const computShape = `hand-${computerShape}-o`;
  // console.log('humanshape: ', humanShape, 'computershape: ', computShape);
  if (humanShape === computShape) {
    console.log('equality');
    dispatch(equality());
  } else {
    dispatch(whoIsStrongest(humanShape, computShape));
  }
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
    .then(res => dispatch(compareShapes(human.humanShape, res.payload.icon)))
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

export default {
  computerSelectShape,
  compareShapes,
};
