import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../styles';
import { Icon } from '../atoms';
import Button from '../atoms/Button';

const HeaderWrapper = styled.header`
  ${Layout.flexRowBetween}
  height: 48px;
  padding: 8px 16px 8px 16px;
  box-sizing: content-box;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

const onMenuClick: (e: React.MouseEvent) => void = (e) => {
  console.log(e);
  console.log('toggleMenu');
};

const Header: (props: any) => JSX.Element = (props) => (
  <HeaderWrapper>
    <Button onClick={() => console.log('header-button')} innerHTML={<Icon.MenuIcon />} />
    <Text>Lahatjob</Text>
    <Button onClick={() => console.log('header-button')} innerHTML={<Icon.LoginIcon />} />
  </HeaderWrapper>
);

export default Header;
