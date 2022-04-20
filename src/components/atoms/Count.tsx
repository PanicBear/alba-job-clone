import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../styles';

interface CountProps {
  fieldName: string;
  fieldCount: number;
}

const CountWrapper = styled.div`
  ${Layout.flexRowBetween}
  width: 30vw;
`;
const CountFieldName = styled.p`
  flex: 1;
  font-size: 1.5vh;
  font-weight: bold;
  margin: 0.5em 0;
`;
const CountFieldNumber = styled.p`
  flex: 2;
  font-size: 1.5vh;
  margin-bottom: 0.5em 0;
`;

const Count: (props: CountProps) => JSX.Element = ({ fieldName, fieldCount }) => {
  return (
    <CountWrapper>
      <CountFieldName>{fieldName}</CountFieldName>
      <CountFieldNumber>{fieldCount}</CountFieldNumber>
    </CountWrapper>
  );
};

export default Count;
