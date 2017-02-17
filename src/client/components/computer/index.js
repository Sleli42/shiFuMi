import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionList from '../../actions';
import DisplayShape, { DisplayWins } from '../shape/display';

const Wrapper = styled.section`
  border: 2px solid black;
  margin: 10px;
  max-width: 350px;
  min-width: 200px;
  min-height: 400px;
  flex-grow: 1;
`;

const WrapperTitle = styled.h3`
  background-color:	#ffcd94;
  color: #ffffff;
  font-size: 20px;
  font-weight: lighter;
  text-align: center;
`;

const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = () =>
  <WrapperTitle>
    Computer Board
  </WrapperTitle>
  ;

const ComputerBoard = ({ computer, currentLoads }) => {
  const { computerShape, color, win } = computer;
  const shape = `hand-${computerShape}-o`;
  return (
    <Wrapper>
      <Title />
      {
        (computer.win)
        ? <DisplayWins result={win} />
        : <div />
      }
      {
        (currentLoads >= 1)
        ? <SpinContainer><Spin size="large" /></SpinContainer>
        : <DisplayShape icon={shape} color={color} />
      }
    </Wrapper>
  );
};

ComputerBoard.propTypes = {
  computer: PropTypes.object.isRequired,
  currentLoads: PropTypes.number.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(ComputerBoard);
