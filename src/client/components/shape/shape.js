import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.li`
  list-style: none;
  padding: 0;
  height: 100px;
  margin: 5px;
  flex-grow: 1;
`;

const ShapeIcon = ({ actions, icon }) => {
  const handleClick = () => {
    actions.selectShape(icon);
  }
  return (
    <button
      className={`fa fa-${icon} fa-4x`}
      aria-hidden="true"
      onClick={handleClick}
    />
  );
};

ShapeIcon.propTypes = {
  actions: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
};

const Shape = ({ actions, icon }) =>
  <Wrapper>
    <ShapeIcon actions={actions} icon={icon} />
  </Wrapper>
  ;

Shape.propTypes = {
  actions: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Shape;
