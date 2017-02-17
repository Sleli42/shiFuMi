import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  margin: 5px 2px;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
`;

const WrapperScore = styled.li`
  height: 100px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const DisplayScore = ({ value }) =>
  <WrapperScore>
    <p>Wins</p>
    <span>{ value }</span>
  </WrapperScore>
  ;

DisplayScore.propTypes = {
  value: PropTypes.number.isRequired,
};

const ScoreList = ({ scoreList }) => {
  const { humanWins, computerWins, ties } = scoreList;
  return (
    <Wrapper>
      <DisplayScore value={humanWins} />
      <DisplayScore value={ties} />
      <DisplayScore value={computerWins} />
    </Wrapper>
  );
};

ScoreList.propTypes = {
  scoreList: PropTypes.object.isRequired,
};

export default ScoreList;
