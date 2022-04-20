import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../styles';
import { Icon } from '../atoms';
import Button from '../atoms/Button';

const HeaderWrapper = styled.header`
  ${Layout.flexRowBetween}
  ${Layout.spacePadding}
  height: 8vh;
  box-sizing: content-box;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 4vh;
`;

const Header: (props: any) => JSX.Element = (props) => (
  <HeaderWrapper>
    <Button onClick={() => console.log('header-button')} innerHTML={<Icon.MenuIcon />} />
    <Text>Lahatjob</Text>
    <Button onClick={() => console.log('header-button')} innerHTML={<Icon.LoginIcon />} />
  </HeaderWrapper>
);

export default Header;
