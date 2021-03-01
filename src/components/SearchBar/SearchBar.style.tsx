import styled, { css } from 'styled-components';
import SearchIcon from './ic_search.svg';
import ClearIcon from './ic_clear.svg';
import Input from '../Input/Input.component';
import { sharedMargin } from '../../shared/shared.styled'

const heightSearchBar = 36;

const sharedStylesText = css`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;
`;

export const SearchBarFrame = styled.div`
  ${sharedMargin};

  position: relative;
  height: ${heightSearchBar}px;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  background-color: transparent;
`;

export const StyledSearchIcon = styled.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translate(-0, -50%);
  height: 16px;
  width: 16px;
  background-image: url(${SearchIcon});
`;

export const ClearIconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 6px;
  cursor: pointer;
  transform: translate(-0, -50%);
`;

export const StyledClearIcon = styled.span`
  height: 14px;
  width: 14px;
  background-image: url(${ClearIcon});
`;

export const SearchInput = styled(Input)`
  ${sharedStylesText}

  height: ${heightSearchBar}px;
  padding: 0 24px 0 36px;
  border: none;
  background-color: transparent;

  &::placeholder {
    ${sharedStylesText}
    color: ${({ theme }) => theme.palette.text.main};
  }

  &:focus {
    outline: none;
    border: none;
    &::placeholder {
      font-size: 0;
    }
  }
`;
