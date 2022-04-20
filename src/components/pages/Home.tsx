import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../styles';
import { AdBanner } from '../atoms';
import Count from '../atoms/Count';
import { Navbar, Search } from '../molecules';
import { Header } from '../organisms';

const ViewCountSection = styled.section`
  ${Layout.flexRowBetween};
  ${Layout.spacePadding};
`;
const ViewCount = styled.div`
  ${Layout.flexColStart}
  ${Layout.spacePadding}
`;
const ToAllJobsWrapper = styled.div`
  flex: row;
`;
const ToAllJobsArea = styled.p`
  font-size: 2.5vh;
  height: 2.5vh;
`;

const Home: (props: any) => JSX.Element = (props) => {
  const dailyVisitor = 1000;
  const totalVisitor = 1000000000;

  return (
    <>
      <Header />
      <Search />
      <Navbar />
      <AdBanner />
      <ViewCountSection>
        <ViewCount>
          <Count fieldName={'Today'} fieldCount={dailyVisitor} />
          <Count fieldName={'Total'} fieldCount={totalVisitor} />
        </ViewCount>
      </ViewCountSection>
    </>
  );
};

export default Home;
