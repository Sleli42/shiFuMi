import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Shape from './shape';

/* ul padding auto */

const Wrapper = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const ShapeList = ({ action, shapeList }) => {
  const { paper, rock, scissors } = shapeList;
  return (
    <Wrapper>
      <Shape action={action} icon={paper} />
      <Shape action={action} icon={rock} />
      <Shape action={action} icon={scissors} />
    </Wrapper>
  );
};

ShapeList.propTypes = {
  action: PropTypes.func.isRequired,
  shapeList: PropTypes.object.isRequired,
};

export default ShapeList;
