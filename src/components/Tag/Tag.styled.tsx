import styled from 'styled-components';
import { rgba } from 'polished';
import { ITagStyled } from './Tag.types'

export const TagStyled = styled.div<ITagStyled>`
  position: ${({ close }) => close ? 'relative' : 'static'};
  display: inline-block;
  background-color: ${({ theme, background }) => background ? theme.palette.userTag : 'none'};
  border-radius: ${({ background }) => background ? '50px' : '0'};
  padding: ${({ background }) => background ? '10px 15px' : '0px'};
`;

export const CloseStyled = styled.div<{ close?: boolean; }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.error};
  background-color: ${({ theme }) => rgba(theme.palette.userTag, 0.8)};
  border-radius: 50px;
  cursor: pointer;
`;

export const TagListStyled = styled.ul`
  display: flex;
  list-style: none;
`;

export const TagListItemStyled = styled.li`
  & + & {
    margin-left: 15px;
  }
`;