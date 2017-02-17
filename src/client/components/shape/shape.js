import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.li`
  list-style: none;
  padding: 0;
  height: 100px;
  margin: 5px;
  display:flex;
  justify-content: center;
  align-items: flex-start;
  flex-basis: 33.3333%;
`;

const ShapeIcon = ({ action, icon }) => {
  const handleClick = () => {
    action(icon);
  };
  return (
    <button
      className={`fa fa-${icon} fa-4x`}
      aria-hidden="true"
      onClick={handleClick}
    />
  );
};

ShapeIcon.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

const Shape = ({ action, icon }) =>
  <Wrapper>
    <ShapeIcon action={action} icon={icon} />
  </Wrapper>
  ;

Shape.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Shape;
