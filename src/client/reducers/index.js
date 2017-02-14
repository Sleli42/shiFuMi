import { combineReducers } from 'redux';
import computer from './computer';
import human from './human';
import scoreList from './scoreList';
import history from './history';

const rootReducers = combineReducers({
  computer,
  human,
  scoreList,
  history,
});

export default rootReducers;
