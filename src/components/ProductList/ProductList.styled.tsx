import styled from 'styled-components';

export const ProductListStyled = styled.ul`
  margin-bottom: 30px;
  padding: 0.9375rem 1.875rem;
  list-style: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.backgroundList};
`;

export const ProductListItemStyled = styled.li`
  & + & {
    border-top: 2px solid ${({ theme }) => theme.palette.borderLine};
  }
`;