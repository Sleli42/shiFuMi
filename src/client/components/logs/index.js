import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Scores from './scores';

const Wrapper = styled.section`
  border: 2px solid black;
  margin: 10px;
  max-width: 400px;
  max-height: 500px;
  flex-grow: 1;
  flex-shrink: 1;
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

const Logs = ({ scoreList, roundCount }) =>
  <Wrapper>
    <Title />
    <Scores scoreList={scoreList} />
    <Round roundCount={roundCount} />
  </Wrapper>
  ;

Logs.propTypes = {
  scoreList: PropTypes.object.isRequired,
  roundCount: PropTypes.number.isRequired,
};

export default Logs;
