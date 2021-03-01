import styled from 'styled-components';
import { sharedMargin } from '../../shared/shared.styled'
import { ISharedMargin } from '../../shared/shared.styled'

interface WrapperProps extends ISharedMargin {
  fullWidth?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${sharedMargin};

  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '320px')};
  min-width: 320px;
`;

export const FormControl = styled.label``;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1;
  color: ${({ theme }) => theme.palette.text.main};
`;

export const InputAction = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;
  color: ${({ theme }) => theme.palette.primary};
  margin-left: auto;
`;

export const Error = styled.span`
  margin-top: 6px;
  font-size: 0.75rem;
  line-height: 1;
  color: ${({ theme }) => theme.palette.error};
`;
