import { css } from 'styled-components';

export interface ISharedMargin {
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
}

export const sharedMargin = css<ISharedMargin>`
  margin-top: ${({ mt }) => mt || '0'};
  margin-right: ${({ mr }) => mr || '0'};
  margin-bottom: ${({ mb }) => mb || '0'};
  margin-left: ${({ ml }) => ml || '0'};
` 