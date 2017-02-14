import React, { PropTypes } from 'react';
import styled from 'styled-components';
import DisplayShape from '../shape/display';

const Wrapper = styled.section`
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
  color: red;
  margin-top: 110px;
  margin-bottom: 75px;
`;

const Title = () =>
  <WrapperTitle>
    Computer Board
  </WrapperTitle>
  ;

const DisplayWins = () =>
  <WrapperWins>
    LOOSE !
  </WrapperWins>
  ;

const computerBoard = ({ shape }) =>
  <Wrapper>
    <Title />
    <DisplayWins />
    {/* fct => if loose ->.. || if win ->..  */}
    <DisplayShape icon={shape} />
  </Wrapper>
  ;

  computerBoard.propTypes = {
    shape: PropTypes.string.isRequired,
  };

export default computerBoard;
