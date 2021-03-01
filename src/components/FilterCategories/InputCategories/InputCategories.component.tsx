import React from 'react';
import {
  InputCategoriesButtonStyled,
  InputCategoriesInputIconStyled,
  InputCategoriesInputBoxStyled,
  InputCategoriesInputStyled,
  InputCategoriesStyled
} from '../InputCategories/InputCategories.styled'

import arrow from './down-arrow.svg';
import { IInputCategories } from './InputCategories.types';

const InputCategories: React.FC<IInputCategories> = ({
  tag,
  setTag,
  onSubmitTag,
  ...props
}) => (
  <InputCategoriesStyled onSubmit={(e) => onSubmitTag(e)} {...props}>
    <InputCategoriesInputBoxStyled>
      <InputCategoriesInputStyled value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <InputCategoriesInputIconStyled src={arrow} />
    </InputCategoriesInputBoxStyled>
    <InputCategoriesButtonStyled >
      +
    </InputCategoriesButtonStyled>
  </InputCategoriesStyled>
);

export default InputCategories;