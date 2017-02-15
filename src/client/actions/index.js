import human from './human';
import computer from './computer';
import scoreList from './scoreList';
import currentLoads from './currentLoads';

export default {
  ...human,
  ...computer,
  ...scoreList,
  ...currentLoads,
};
