import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HumanBoard from '../human';
import ComputerBoard from '../computer';
import Logs from '../logs';
import actionList from '../../actions';

const Wrapper = styled.section`
  padding: 3em 1em;
  background: #ffffff;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`;

const shapes = {
  paper: 'hand-paper-o',
  rock: 'hand-rock-o',
  scissors: 'hand-scissors-o',
};

const App = ({ actions, human, computer, scoreList, history, currentLoads }) => {
  return (
    <Wrapper>
      <HumanBoard actions={actions} shapeList={shapes} humanData={human} computerData={computer} />
      <Logs actions={actions} scoreList={scoreList} history={history} humanResult={human.win} computerResult={computer.win} />
      <ComputerBoard actions={actions} computerData={computer} currentLoads={currentLoads} />
    </Wrapper>
  );
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  human: PropTypes.object.isRequired,
  computer: PropTypes.object.isRequired,
  scoreList: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
  currentLoads: PropTypes.number.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
