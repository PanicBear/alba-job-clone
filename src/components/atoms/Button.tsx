import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent) => void;
  innerHTML: string | JSX.Element;
}

const Button: (props: ButtonProps) => JSX.Element = ({ onClick, innerHTML }) => {
  return <button onClick={onClick}>{innerHTML}</button>;
};

export default Button;
