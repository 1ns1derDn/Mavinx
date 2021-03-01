import React, { useState } from 'react';
import { IInput } from '../Input/Input.types';
import {
  SearchBarFrame,
  SearchInput,
  ClearIconWrapper,
  StyledSearchIcon,
  StyledClearIcon
} from './SearchBar.style';

import { ISharedMargin } from '../../shared/shared.styled';

export interface ISearchBar extends IInput, ISharedMargin {};

const SearchBar: React.FC<ISearchBar> = ({ className, ...restProps }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <SearchBarFrame className={className}  {...restProps}>
      <StyledSearchIcon />

      <SearchInput
        value={value}
        onChange={handleChange}
        placeholder="Поиск Экспертов, навыков"
      />

      {value.length ? (
        <ClearIconWrapper onClick={handleClear}>
          <StyledClearIcon />
        </ClearIconWrapper>
      ) : null}
    </SearchBarFrame>
  );
};

export default SearchBar;
