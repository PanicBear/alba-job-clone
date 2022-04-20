import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import { SearchIcon } from '../atoms/Icon';
import Input from '../atoms/Input';

const FormWithStyle = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0 16px;
`;

const Search: (props: any) => JSX.Element = (props) => {
  const onButtonClick: (e: React.MouseEvent) => void = (e) => {
    console.log('search');
  };
  return (
    <FormWithStyle>
      <Input placeholder="Enter keyword to search" />
      <Button onClick={onButtonClick} innerHTML={<SearchIcon />} />
    </FormWithStyle>
  );
};

export default Search;
