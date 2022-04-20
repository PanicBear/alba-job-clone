import React, { memo } from 'react';
import { SVGIconProps } from '.';

const SearchIcon: (props: SVGIconProps) => JSX.Element = ({ fill = 'none' }) => (
  <svg
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default memo(SearchIcon);
