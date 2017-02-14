import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ShapeList from '../shape/shape_list';
import DisplayShape from '../shape/display';

const WrapperBoard = styled.section`
  border: 2px solid black;
  margin: 10px;
  max-width: 400px;
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

const WrapperWins = styled.h3`
  font-size: 70px;
  text-align: center;
  color: green;
  margin-top: -20px;
`;

const Title = () =>
  <WrapperTitle>
    Human Board
  </WrapperTitle>
  ;

const DisplayWins = () =>
  <WrapperWins>
    Win !
  </WrapperWins>
  ;

const HumanBoard = ({ actions, shapeList, shape }) =>
  <WrapperBoard>
    <Title />
    <ShapeList actions={actions} shapeList={shapeList} />
    <DisplayWins />
    <DisplayShape icon={shape} />
  </WrapperBoard>
    ;

HumanBoard.propTypes = {
  actions: PropTypes.object.isRequired,
  shapeList: PropTypes.object.isRequired,
  shape: PropTypes.string.isRequired,
};

export default HumanBoard;
