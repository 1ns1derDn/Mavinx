import styled, { css } from 'styled-components';
import arrowLeft from './left-arrow.svg';
import arrowRight from './right-arrow.svg';

const sharedLinkArrow = css`
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.palette.pagination.arrow};
`

const sharedArrow = css`
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 19px;
`

export const PaginationStyled = styled.div`
  .Pagination {
    display: flex;
    list-style: none;
  }

  .Pagination-Item {
    cursor: pointer;
    &.selected {
      a {
        color: ${({ theme }) => theme.palette.pagination.selected};
      }
    }
    & + .Pagination-Item {
      margin-left: 5px;
    }
  }

  .break {
    cursor: pointer;
    margin: 0 5px;
    color: ${({ theme }) => theme.palette.pagination.break};
  }

  .previous {
    margin-right: 30px;
    a {
        ${sharedLinkArrow}
        padding-left: 2.5rem;
        &::before {
        ${sharedArrow}
        left: 0px;
        background-image: url(${arrowLeft});
      }
    }
  }

  .next {
    margin-left: 30px;
    a {
        ${sharedLinkArrow}
        padding-right: 2.5rem;
        &::before {
        ${sharedArrow}
        right: 0px;
        background-image: url(${arrowRight});
      }
    }
    
  }

  .Pagination-Link {
    color: ${({ theme }) => theme.palette.pagination.link};
  }
`;
