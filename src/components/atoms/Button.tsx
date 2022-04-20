import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles';

interface ButtonProps {
  innerHTML: string | JSX.Element;
  [key: string]: any;
}

const ButtonWithStyle = styled.button`
  cursor: pointer;
`;

const Button: (props: ButtonProps) => JSX.Element = ({ innerHTML, ...attrs }) => {
  return <ButtonWithStyle {...attrs}>{innerHTML}</ButtonWithStyle>;
};

export default Button;
