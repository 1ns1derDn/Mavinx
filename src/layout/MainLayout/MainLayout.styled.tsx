import styled from 'styled-components';

export const MainLayoutStyled = styled.div`
  background-color: ${({ theme }) => theme.palette.extraLightGrey};
`;

export const MainLayoutWrapperStyled = styled.div`
  display: flex;
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
`;

export const MainLayoutAsideStyled = styled.aside`
  max-width: 360px;
  width: 100%;
  margin-right: 30px;
  padding-right: 1.875rem;
  border-right: 2px solid ${({ theme }) => theme.palette.borderLine};
  flex-shrink: 0;
  align-self: flex-start;
`;

export const MainLayoutLineStyled = styled.aside`
  & + & {
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 2px solid ${({ theme }) => theme.palette.borderLine};
  }
`;

export const MainLayoutMainStyled = styled.main`
  width: 100%;
`;