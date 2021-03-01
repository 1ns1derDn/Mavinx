import styled from 'styled-components';

export const InputCategoriesStyled = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  margin-bottom: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.backgroundList};
`;

export const InputCategoriesInputBoxStyled = styled.div`
  position: relative;
  margin-right: 20px;
  width: 100%;
`;

export const InputCategoriesInputStyled = styled.input`
  padding-right: 1.875rem;
  line-height: 2.25rem;
  outline: none;
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.palette.borderLine};
`;

export const InputCategoriesInputIconStyled = styled.img`
  position: absolute;
  top: 50%;
  right: 0;

  transform: translateY(-50%);

  width: 16px;
  height: 12px;
`;

export const InputCategoriesButtonStyled = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
`;

