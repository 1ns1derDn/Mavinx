import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  min-height: 200px;
  padding: 1.875rem 0;
`;

export const ProductInfoStyled = styled.div`
  max-width: 800px;
  width: 100%;
  border-right: 2px solid ${({ theme }) => theme.palette.borderLine};
`;

export const ProductBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 0 0.9375rem;
`;