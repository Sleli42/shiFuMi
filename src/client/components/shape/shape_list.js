import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Shape from './shape';

/* ul padding auto */

const Wrapper = styled.ul`
  margin: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
`;

const ShapeList = ({ actions, shapeList }) => {
  const { paper, rock, scissors } = shapeList;
  return (
    <Wrapper>
      <Shape actions={actions} icon={paper} />
      <Shape actions={actions} icon={rock} />
      <Shape actions={actions} icon={scissors} />
    </Wrapper>
  );
};

ShapeList.propTypes = {
  actions: PropTypes.object.isRequired,
  shapeList: PropTypes.object.isRequired,
};

export default ShapeList;
