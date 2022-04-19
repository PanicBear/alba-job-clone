import React from 'react';
import Button from '../atoms/Button';
import { SearchIcon } from '../atoms/Icon';
import Input from '../atoms/Input';

const Search: (props: any) => JSX.Element = (props) => {
  const onButtonClick: (e: React.MouseEvent) => void = (e) => {
    console.log('search');
  };
  return (
    <>
      <form>
        <Input placeholder="Enter keyword to search" />
        <Button onClick={onButtonClick} innerHTML={<SearchIcon />} />
      </form>
    </>
  );
};

export default Search;
