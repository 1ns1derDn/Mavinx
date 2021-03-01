import styled from 'styled-components';

export const SelectStyled = styled.div`
  position: relative;
  width: 60px;
`;

export const SelectIconStyled = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 12px;
  height: 9px;
`;

export const SelectHeadStyled = styled.div`
  position: relative;
  padding: 10px 15px 10px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.borderLine};
  width: 100%;
  cursor: pointer;
`;

export const SelectOverlaidStyled = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
`;

export const SelectListStyled = styled.ul`
  position: absolute;
  z-index: 10;
  top: 40px;
  right: 0;
  width: 100%;
  list-style: none;
  background-color: ${({ theme }) => theme.palette.lightGrey};
`;

export const SelectListItemStyled = styled.li`
  padding: 5px 0;
  & + & {
    border-top: 1px solid ${({ theme }) => theme.palette.borderLine};
  }
`;