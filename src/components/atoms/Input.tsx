import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
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
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  register: UseFormRegisterReturn;
  [attrs: string]: any;
}

const Input: (props: InputProps) => JSX.Element = ({ type = 'text', placeholder, register, ...attrs }) => {
  return <InputWithStyle type={type} placeholder={placeholder} {...register} {...attrs} />;
};

export default Input;
