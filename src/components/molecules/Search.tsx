import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Layout } from '../../styles';
import { Button, FormErrorMessage, Icon, Input } from '../atoms';

const FormWrapper = styled.div`
  margin-top: 16px;
  padding: 0 16px;
`;
const FormWithStyle = styled.form`
  ${Layout.flexRowBetween}
`;

interface SearchForm {
  searchText: string;
}

const Search: (props: any) => JSX.Element = (props) => {
  const { register, handleSubmit, formState } = useForm<SearchForm>();

  const onValid = (formData: SearchForm) => {
    console.log(formData);
  };

  useEffect(() => {
    console.log(formState.errors);
  }, [formState]);

  return (
    <FormWrapper>
      <FormWithStyle onSubmit={handleSubmit(onValid)}>
        <Input
          register={register('searchText', { required: 'Keyword for search is required' })}
          placeholder="Enter keyword to search"
        />
        <Button innerHTML={<Icon.SearchIcon />} />
      </FormWithStyle>
      <FormErrorMessage errorMessage={formState.errors.searchText?.message} />
    </FormWrapper>
  );
};

export default Search;
