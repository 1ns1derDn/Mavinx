import React from 'react';

import { ProductsStyled } from './Products.styled';
import MainLayout from '../../layout/MainLayout/MainLayout.component';
import ProductList from '../../components/ProductList/ProductList.component' ;
import TopPanel from '../../components/TopPanel/TopPanel.component';
import Pagination from '../../components/Pagination/Pagination.componet';

const Products: React.FC = () => (
  <ProductsStyled>
    <MainLayout>
      <TopPanel mb="30px" count={192}/>
      <ProductList />
      <Pagination />
    </MainLayout>
  </ProductsStyled>
);

export default Products;