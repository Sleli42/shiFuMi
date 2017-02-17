import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionList from '../../actions';
import ShapeList from '../shape/shape_list';
import DisplayShape, { DisplayWins } from '../shape/display';

export const WrapperBoard = styled.section`
  border: 2px solid black;
  margin: 10px;
  max-width: 350px;
  min-width: 200px;
  min-height: 400px;
  flex-grow: 1;
  position: relative;
`;

const WrapperTitle = styled.h3`
  background-color:	#ffcd94;
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

const HumanBoard = ({ action, shapeList, human }) => {
  return (
    <WrapperBoard>
      <Title />
      <ShapeList action={action} shapeList={shapeList} />
      {
        (human.win)
        ? <DisplayWins result={human.win} />
        : null
      }
      <DisplayShape icon={human.humanShape} color={human.color} />
    </WrapperBoard>
  );
};

HumanBoard.propTypes = {
  action: PropTypes.func.isRequired,
  shapeList: PropTypes.object.isRequired,
  human: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(HumanBoard);
