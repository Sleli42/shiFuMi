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
  color: red;
  margin-top: 110px;
  margin-bottom: 75px;
`;

export const DisplayWins = ({ result }) => {
  if (result === undefined) return <div />;
  return (
    <WrapperWins>
      {
        (result)
          ? <p>{result}</p>
          : <div />
      }
    </WrapperWins>
  );
};

DisplayWins.propTypes = {
  result: PropTypes.string.isRequired,
};

export default DisplayShape;
