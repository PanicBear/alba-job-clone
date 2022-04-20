import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles';

interface ButtonProps {
  onClick: (e: React.MouseEvent) => void;
  innerHTML: string | JSX.Element;
}

const ButtonWithStyle = styled.button`
  cursor: pointer;
`;

const Button: (props: ButtonProps) => JSX.Element = ({ onClick, innerHTML }) => {
  return <ButtonWithStyle onClick={onClick}>{innerHTML}</ButtonWithStyle>;
};

export default Button;
