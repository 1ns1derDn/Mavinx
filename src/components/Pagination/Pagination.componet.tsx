import React from 'react';
import { PaginationStyled } from './Pagination.styled'
import ReactPaginate from 'react-paginate';

const Pagination: React.FC = () => (
  <PaginationStyled>
    <ReactPaginate
      pageCount={20}
      marginPagesDisplayed={2}
      pageRangeDisplayed={4}
      previousLabel="Назад"
      nextLabel="Дальше"
      containerClassName="Pagination"
      pageClassName="Pagination-Item"
      pageLinkClassName="Pagination-Link"
    />
  </PaginationStyled>
)

export default Pagination;

