import { combineReducers } from 'redux';
import computer from './computer';
import human from './human';
import scoreList from './scoreList';
import history from './history';
import currentLoads from './currentLoads';

const rootReducers = combineReducers({
  computer,
  human,
  scoreList,
  history,
  currentLoads,
});

export default rootReducers;
