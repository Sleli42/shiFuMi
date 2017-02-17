import React, { PropTypes } from 'react';
import styled from 'styled-components';

const WrapperShape = styled.section`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-self: flex-end | center;
  margin-top: -20px;
`;

const Icon = styled.i`
  font-size: 200px;
`;

const DisplayShape = ({ icon, color }) =>
  <WrapperShape>
    <Icon className={`fa fa-${icon} fa-5x`} style={{ color }} aria-hidden="true" />
  </WrapperShape>
  ;

DisplayShape.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const WrapperWins = styled.h3`
  font-size: 70px;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 30px;
`;

const chooseColor = result => {
  if (result === 'win') return '#5cb85c';
  else if (result === 'loose') return '#ff4040';
  else return '#d3a625'
};

export const DisplayWins = ({ result, colors }) => {
  if (result === undefined) return null;
  const color = chooseColor(result);
  return (
    <WrapperWins>
      {
        (result)
          ? <p style={{ color }}>{result}</p>
          : <div />
      }
    </WrapperWins>
  );
};

DisplayWins.propTypes = {
  result: PropTypes.string.isRequired,
};

export default DisplayShape;
