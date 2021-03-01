import styled from 'styled-components';
import Typography from '../Typography/Typography.component'
import { ITypographyComponent } from '../Typography/Typography.types'

export const FilterCategoriesStyled = styled.div``;

export const FilterCategoriesBoxStyled = styled(Typography)<ITypographyComponent>`
  display: flex;
  margin-bottom: 30px;
`;

export const FilterCategoriesListStyled = styled.ul`
  display: flex;  
  flex-wrap: wrap;
  margin-left: -15px;
  list-style: none;
`;

export const FilterCategoriesItemStyled = styled.li`
  margin-bottom: 10px;
  margin-left: 15px;
`;