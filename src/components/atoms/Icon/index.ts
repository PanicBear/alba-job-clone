import { MouseEventHandler } from 'react';

export type SVGIconProps = {
  fill?: string;
  onClick?: MouseEventHandler<SVGElement>;
};

export { default as BackIcon } from './Back';
export { default as LoginIcon } from './Login';
export { default as MenuIcon } from './Menu';
export { default as SearchIcon } from './Search';
export { default as LogoutIcon } from './Logout';
export { default as UserIcon } from './User';
