import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles';

const TextWithStyle = styled.p`
  color: ${Color.RED01};
  font-size: 2vh;
  padding: 0.5vh 1vw;
  margin: 0;
`;

interface ErrorMessageProps {
  errorMessage?: string;
  style?: React.CSSProperties;
}

const FormErrorMessage: (props: ErrorMessageProps) => JSX.Element = ({ errorMessage = '', style = {} }) => {
  return <TextWithStyle style={style}>{errorMessage}</TextWithStyle>;
};

export default FormErrorMessage;
