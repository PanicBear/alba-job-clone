import React from 'react';
import styled from 'styled-components';
import { Color, Layout, StyleAttr } from '../../styles';

const NavbarWithStyle = styled.nav`
  ${Layout.flexRowBetween}
  ${Layout.spacePadding}
  height: 6vh;
  font-size: 2vh;
`;

const NavItem = styled.div`
  ${StyleAttr.borderRadius}
  flex: 1;
  margin: 0 2.5vw;
  padding: 0.25vh 0.1vw;
  font-size: 2vh;
  text-align: center;
  box-sizing: content-box;
  white-space: nowrap;
  cursor: pointer;

  :hover {
    background-color: ${Color.GRAY01};
  }
`;

const Navbar: () => JSX.Element = () => (
  <NavbarWithStyle>
    <NavItem>Job info</NavItem>
    <NavItem>Region</NavItem>
    <NavItem>Map</NavItem>
    <NavItem>Talent</NavItem>
    <NavItem>Talk</NavItem>
  </NavbarWithStyle>
);

export default Navbar;
