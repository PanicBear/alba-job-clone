import React from 'react';
import styled from 'styled-components';

const InputWithStyle = styled.input`
  height: 24px;
  width: max-content;
  font-size: 16px;
`;

interface InputProps {
  placeholder: string;
}

const Input: (props: InputProps) => JSX.Element = ({ placeholder }) => {
  return <InputWithStyle placeholder={placeholder} />;
};

export default Input;
