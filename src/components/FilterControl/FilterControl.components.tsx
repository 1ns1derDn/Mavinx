import React from 'react';
import { FilterControlStyled } from './FilterControl.styled';
import Typography from '../Typography/Typography.component';
import Button  from '../Button/Button.component';

const FilterControl: React.FC = () => {
  return (
    <FilterControlStyled>
      <Typography variant='headline-1' as='span'>
        Фильтыр
      </Typography>
      <Button as='button' variant='link'>
        Очистить
      </Button>
    </FilterControlStyled>
  )
}

export default FilterControl;