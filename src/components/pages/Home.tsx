import React from 'react';
import Search from '../molecules/Search';
import Header from '../organisms/Header';

const Home: (props: any) => JSX.Element = (props) => {
  return (
    <>
      <Header />
      <Search />
    </>
  );
};

export default Home;
