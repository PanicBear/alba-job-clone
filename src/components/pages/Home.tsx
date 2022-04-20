import React from 'react';
import { AdBanner } from '../atoms';
import { Navbar, Search } from '../molecules';
import { Header } from '../organisms';

const Home: (props: any) => JSX.Element = (props) => {
  return (
    <>
      <Header />
      <Search />
      <Navbar />
      <AdBanner />
    </>
  );
};

export default Home;
