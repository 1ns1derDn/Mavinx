import styled from 'styled-components';
import { sharedMargin } from '../../shared/shared.styled';

export const UserStyled = styled.img`
  cursor: pointer;
`;

export const UserWrapperStyled = styled.span`
  ${sharedMargin};
  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.userBackground};
`;

export const UserListStyled = styled.ul`
  position: absolute;
  top: 55px;
  right: 0;
  width: 200px;
  list-style: none;
  background-color: ${({ theme }) => theme.palette.lightGrey};
  &:before {
    content: "";
    position: absolute;
    top: -25px;
    right: 0;
    width: 200px;
    height: 25px;
  }
`;

export const UserListItemStyled = styled.li`
  padding: 5px 0;
  & + & {
    border-top: 1px solid ${({ theme }) => theme.palette.borderLine};
  }
`;