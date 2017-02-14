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

const App = ({ actions, shapes, humanShape, computerShape, scoreList, roundCount }) => {
  return (
    <Wrapper>
      <HumanBoard actions={actions} shapeList={shapes} shape={humanShape} />
      <Logs scoreList={scoreList} roundCount={roundCount} />
      <ComputerBoard shape={computerShape} />
    </Wrapper>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
