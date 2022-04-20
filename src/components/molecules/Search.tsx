import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Layout } from '../../styles';
import { Button, FormErrorMessage, Icon, Input } from '../atoms';

const FormWithStyle = styled.form`
  ${Layout.spacePadding}
  ${Layout.flexRowBetween}
`;

interface SearchForm {
  searchText: string;
}

const Search: () => JSX.Element = () => {
  const { register, handleSubmit } = useForm<SearchForm>();

  const onValid = (formData: SearchForm) => {
    console.log(formData);
  };

  return (
    <FormWithStyle onSubmit={handleSubmit(onValid)}>
      <Input
        register={register('searchText', { required: 'Keyword for search is required' })}
        placeholder="Enter keyword to search"
        style={{ marginRight: '1vw' }}
      />
      <Button innerHTML={<Icon.SearchIcon />} />
    </FormWithStyle>
  );
};

export default Search;
