import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.palette.background};
`;

export const HeaderInnerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9375rem 0;
`;

export const HeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;