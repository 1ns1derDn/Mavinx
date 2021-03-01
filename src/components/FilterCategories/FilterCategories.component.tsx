import React from 'react';
import {
  FilterCategoriesStyled,
  FilterCategoriesBoxStyled,
  FilterCategoriesListStyled,
  FilterCategoriesItemStyled
} from './FilterCategories.styled';
import Typography from '../Typography/Typography.component';
import { IFilterCategories } from './FilterCategories.types';
import InputCategoriesContainer from './InputCategories/container/InputCategoriesContainer';
import Tag from '../Tag/Tag.component';

const FilterCategories: React.FC<IFilterCategories> = ({
  count,
  tagArr,
  onClickRemoveTag,
}) => (
  <FilterCategoriesStyled>
    <FilterCategoriesBoxStyled as='div'>
      <Typography as='h4' variant='headline-1'>
        Категории
      </Typography>
      <Typography as='span' variant='headline-1'>
        ({count})
      </Typography>
    </FilterCategoriesBoxStyled>
    <InputCategoriesContainer />
    <FilterCategoriesListStyled>
      {
        tagArr.map((tag: string, index: number) => {
          return (
            <FilterCategoriesItemStyled key={index}>
              <Tag
                tag={tag}
                closeHover
                background
                onClick={() => { onClickRemoveTag(tag) }} />
            </FilterCategoriesItemStyled>
          )
        })
      }
    </FilterCategoriesListStyled>
  </FilterCategoriesStyled>
)



export default FilterCategories;