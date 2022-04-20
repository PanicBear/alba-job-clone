import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles';

const TextWithStyle = styled.p`
  color: ${Color.RED01};
  font-size: 8px;
`;

interface ErrorMessageProps {
  errorMessage?: string;
}

const FormErrorMessage: (props: ErrorMessageProps) => JSX.Element = ({ errorMessage = '' }) => {
  return <TextWithStyle>{errorMessage}</TextWithStyle>;
};

export default FormErrorMessage;
