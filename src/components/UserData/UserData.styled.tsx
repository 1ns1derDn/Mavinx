import styled from 'styled-components';

export const UserDataListStyled = styled.ul`
  border: 2px solid ${({ theme }) => theme.palette.borderLine};
  border-radius: 5px;
  list-style: none;
  align-self: flex-start;
  margin-bottom: 30px;
`;

export const UserDataListItemStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1.25rem;
  min-height: 30px;
  & + & {
    border-top: 2px solid ${({ theme }) => theme.palette.borderLine};
  }
`;
