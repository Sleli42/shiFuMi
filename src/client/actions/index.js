export const SHAPE_SELECTED = 'shape/shapeSelected';

const shapeSelected = shape => ({
  type: SHAPE_SELECTED,
  payload: shape,
});

const selectShape = shape => (dispatch) => {
  dispatch(shapeSelected({ shape }));
};

export default {
  selectShape,
}
