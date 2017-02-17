import { computerSelectShape } from './computer';
import { addLoading } from './currentLoads';

export const HUMAN_SHAPE_SELECTED = 'human/shapeSelected';

const colors = ['#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4', '#2095F2',
  '#02A8F3', '#00BBD3', '#009587', '#4BAE4F', '#FE5621', '#785447', '#9D9D9D', '#5F7C8A'];

const getRamdom = array => array[(Math.floor(Math.random() * array.length))];

const humanShapeSelected = (shape, color) => ({
  type: HUMAN_SHAPE_SELECTED,
  payload: { icon: shape, color }
});

const humanSelectShape = shape => (dispatch) => {
  const ramdomColor = getRamdom(colors);
  dispatch(humanShapeSelected(shape, ramdomColor));
  dispatch(computerSelectShape());
};

export default {
  humanSelectShape,
};
