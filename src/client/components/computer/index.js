import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button, Input, Spin } from 'antd';
import DisplayShape, { DisplayWins } from '../shape/display';

const Wrapper = styled.section`
  border: 2px solid black;
  margin: 10px;
  ${''/* max-width: 300px;*/}
  ${''/* min-width: 200px;*/}
  ${''/* max-height: 500px;*/}
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
    Computer Board
  </WrapperTitle>
  ;

const computerBoard = ({ actions, computerData, currentLoads }) => {
  const { computerShape, color } = computerData;
  const shape = `hand-${computerShape}-o`;
  return (
    <Wrapper>
      <Title />
      {
        (computerData.win)
        ? <DisplayWins result={computerData.win} />
        : <div />
      }
      {
        (currentLoads >= 1)
        ? <Spin size="large" />
        : <DisplayShape icon={shape} color={color} />
      }
    </Wrapper>
  );
};

computerBoard.propTypes = {
  actions: PropTypes.object.isRequired,
  computerData: PropTypes.object.isRequired,
  currentLoads: PropTypes.number.isRequired,
};

export default computerBoard;
