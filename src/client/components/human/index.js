import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ShapeList from '../shape/shape_list';
import DisplayShape, { DisplayWins } from '../shape/display';

const WrapperBoard = styled.section`
  border: 2px solid black;
  margin: 10px;
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

const Title = () =>
  <WrapperTitle>
    Human Board
  </WrapperTitle>
  ;

const HumanBoard = ({ actions, shapeList, humanData, computerData }) => {
  return (
    <WrapperBoard>
      <Title />
      <ShapeList actions={actions} shapeList={shapeList} />
      {
        (humanData.win)
        ? <DisplayWins result={humanData.win} />
        : <div />
      }
      <DisplayShape icon={humanData.humanShape} color={humanData.color} />
    </WrapperBoard>
  );
};

HumanBoard.propTypes = {
  actions: PropTypes.object.isRequired,
  shapeList: PropTypes.object.isRequired,
  humanData: PropTypes.object.isRequired,
  computerData: PropTypes.object.isRequired,
};

export default HumanBoard;
