import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Scores from './scores';
import History from './history';

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

const Logs = ({ actions, scoreList, history, humanResult, computerResult }) => {
  // if (humanResult) actions.addColorsHistory(history, humanResult, computerResult);
  return (
    <Wrapper>
      <Title />
      <Scores scoreList={scoreList} />
      <Round roundCount={scoreList.roundCount} />
      {
        (scoreList.roundCount >= 1)
        ? <History
            actions={actions}
            roundCount={scoreList.roundCount}
            history={history}
            humanResult={humanResult}
            computerResult={computerResult} />
        : <div />
      }
    </Wrapper>
  );
};

Logs.propTypes = {
  actions: PropTypes.object.isRequired,
  scoreList: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
  humanResult: PropTypes.string.isRequired,
  computerResult: PropTypes.string.isRequired,
};

export default Logs;
