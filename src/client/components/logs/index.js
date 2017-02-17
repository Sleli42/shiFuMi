import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionList from '../../actions';
import Scores from './scores';
import History from './history';

const Wrapper = styled.section`
  border: 2px solid black;
  margin: 10px;
  max-width: 300px;
  min-width: 200px;
  max-height: 500px;
  flex-grow: 1;
`;

const WrapperTitle = styled.h3`
  background-color: #a78cff;
  color: #ffffff;
  font-size: 20px;
  font-weight: lighter;
  text-align: center;
`;

const WrapperRound = styled.p`
  text-align: center;
  font-size: 15px;
`;

const Line = styled.p`
  border-top : 1px solid #000;
`;

const Title = () =>
  <WrapperTitle>
    Logs
  </WrapperTitle>
  ;

const Round = ({ roundCount }) =>
  <div>
    <Line />
    <WrapperRound>Round { roundCount }</WrapperRound>
    <Line />
  </div>
  ;

Round.propTypes = {
  roundCount: PropTypes.number.isRequired,
};

const Logs = ({ scoreList }) =>
  <Wrapper>
    <Title />
    <Scores scoreList={scoreList} />
    <Round roundCount={scoreList.roundCount} />
    <History roundCount={scoreList.roundCount} history={scoreList.history} />
  </Wrapper>
  ;

Logs.propTypes = {
  scoreList: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
