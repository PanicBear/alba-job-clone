import React from 'react';
import styled from 'styled-components';
import { Color, Layout, StyleAttr } from '../../styles';

const BannerSection = styled.section`
  ${StyleAttr.borderRadius}
  margin: 1vh 2vw;
  height: 16vh;
  background-color: ${Color.GRAY01};
  box-sizing: border-box;
`;

const AdBanner: () => JSX.Element = () => {
  return <BannerSection />;
};

export default AdBanner;
