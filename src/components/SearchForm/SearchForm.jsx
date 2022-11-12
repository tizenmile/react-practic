import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const onHandleChange = e => {
    
    setQuery(e.currentTarget.value);
    // console.log(e.currentTarget.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query)
    setQuery('')
  }

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" required onChange={onHandleChange}
        defaultValue={'DEFAULT'}>
        <option  disabled value="DEFAULT">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
