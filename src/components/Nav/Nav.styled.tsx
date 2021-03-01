import styled from 'styled-components';

export const NavStyled = styled.nav``; 

export const NavListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`; 

export const NavListItemStyled = styled.li`
  list-style: none;
  & + & {
    margin-left: 30px;
  }
`; 