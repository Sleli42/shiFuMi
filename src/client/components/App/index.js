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

const App = ({ actions }) => {
  return (
    <Wrapper>
      <HumanBoard action={actions.humanSelectShape} shapeList={shapes} />
      <Logs />
      <ComputerBoard />
    </Wrapper>
  );
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
