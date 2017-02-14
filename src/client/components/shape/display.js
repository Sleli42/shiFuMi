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

const DisplayShape = ({ icon }) =>
  <WrapperShape>
    <Icon className={`fa fa-${icon} fa-5x`} aria-hidden="true" />
  </WrapperShape>;

DisplayShape.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default DisplayShape;
