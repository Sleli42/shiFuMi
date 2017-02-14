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
  border: 1px solid black;
  height: 100px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
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

// const DisplayWins = () => {
//
// }

ScoreList.propTypes = {
  scoreList: PropTypes.object.isRequired,
};

export default ScoreList;
