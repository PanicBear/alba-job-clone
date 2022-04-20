import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import { Color, StyleAttr } from '../../styles';

const InputWithStyle = styled.input`
  ${StyleAttr.borderRadius}
  flex: 1;
  height: 3vh;
  width: max-content;
  font-size: 2vh;
  background-color: ${Color.GRAY01};
  padding: 0.5vh 1vw;
  border: 0;
  box-sizing: content-box;
`;

interface InputProps {
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  register: UseFormRegisterReturn;
  style: React.CSSProperties;
  [attrs: string]: any;
}

const Input: (props: InputProps) => JSX.Element = ({ type = 'text', placeholder, register, style = {}, ...attrs }) => {
  return <InputWithStyle type={type} placeholder={placeholder} style={style} {...register} {...attrs} />;
};

export default Input;
