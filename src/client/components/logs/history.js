import React, { PropTypes } from 'react';
import styled from 'styled-components';
import R from 'ramda';

const Wrapper = styled.div`
  background: #ffffff;
  margin-top: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const WrapperLine = styled.div`
  align-self: center;
  flex-grow: 1;
`;

const Icon = styled.i`
  margin: 0 30px;
  font-size: 30px;
`;

const DisplayShapeHistory = ({ icon, color }) =>
  <Icon className={`fa fa-${icon} fa-2x`} style={{ color }} aria-hidden="true" />
  ;

  DisplayShapeHistory.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

const DisplayHistory = ({ lineHistory }) =>
  <WrapperLine>
    <DisplayShapeHistory icon={lineHistory.humanShape} color={lineHistory.humanColor} />
    Round {lineHistory.roundCount}
    <DisplayShapeHistory icon={lineHistory.computerShape} color={lineHistory.computerColor} />
  </WrapperLine>
  ;

DisplayHistory.propTypes = {
  lineHistory: PropTypes.object.isRequired,
}

// no reverse and take(10) -> selector

const History = ({ history }) => {
  return (
    <Wrapper>
      {
        R.compose(
          R.map(line => <DisplayHistory lineHistory={line} key={line.roundCount} />),
          R.take(10),
          R.reverse)
          (history)
      }
    </Wrapper>
  );
};

History.propTypes = {
  history: PropTypes.array.isRequired,
}

export default History;
