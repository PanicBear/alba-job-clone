import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles';

const InputWithStyle = styled.input`
  flex: 1;
  height: 24px;
  width: max-content;
  font-size: 16px;
  background-color: ${Color.GRAY01};
  margin-right: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  box-sizing: content-box;
`;

interface InputProps {
  placeholder: string;
}

const Input: (props: InputProps) => JSX.Element = ({ placeholder }) => {
  return <InputWithStyle placeholder={placeholder} />;
};

export default Input;
