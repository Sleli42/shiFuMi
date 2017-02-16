import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ffffff;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const WrapperLine = styled.div`
  flex-grow: 1;
`;

const Icon = styled.i`
  font-size: 20px;
`;

const DisplayShapeHistory = ({ icon, color }) =>
  <Icon className={`fa fa-${icon} fa-5x`} style={{ color }} aria-hidden="true" />
  ;

  DisplayShapeHistory.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }

// const chooseColor = humanResult => {
//   if (humanResult === 'Win !') {
//     return '#63b45c';
//   } else if (humanResult === 'Draw !') {
//     return '#d4ca65';
//   } else if (humanResult === 'Loose !') {
//     return '#f67272';
//   }
// }
//
// chooseColor.propTypes = {
//   humanResult: PropTypes.string,
// }

const DisplayHistory = ({ humanShape, humanColor, roundCount, computerShape, computerColor }) => {
  return (
    <WrapperLine>
      <DisplayShapeHistory icon={humanShape} color={humanColor} />
      {roundCount}
      <DisplayShapeHistory icon={computerShape} color={computerColor} />
    </WrapperLine>
  );
}

DisplayHistory.propTypes = {
  humanShape: PropTypes.string.isRequired,
  roundCount: PropTypes.number.isRequired,
  computerShape: PropTypes.string.isRequired,
}

const History = ({ actions, roundCount, history, humanResult, computerResult }) => {
  return (
    <Wrapper>
      {
        history.map(line => {
          <DisplayHistory
            humanShape={line.humanShape}
            humanColor={line.humanColor}
            roundCount={line.roundCount}
          />}
        )
      }
    </Wrapper>
  );
};

History.propTypes = {
  roundCount: PropTypes.number.isRequired,
  history: PropTypes.array.isRequired,
}

export default History;
