import { combineReducers } from 'redux';
import computer from './computer';
import human from './human';
import scoreList from './scoreList';
import currentLoads from './currentLoads';

const rootReducers = combineReducers({
  computer,
  human,
  scoreList,
  currentLoads,
});

export default rootReducers;
