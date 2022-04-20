import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  innerHTML: string | JSX.Element;
  style?: React.CSSProperties;
  [key: string]: any;
}

const ButtonWithStyle = styled.button`
  width: 4vh;
  height: 4vh;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Button: (props: ButtonProps) => JSX.Element = ({ innerHTML, style = {}, ...attrs }) => {
  return (
    <ButtonWithStyle style={style} {...attrs}>
      {innerHTML}
    </ButtonWithStyle>
  );
};

export default Button;
