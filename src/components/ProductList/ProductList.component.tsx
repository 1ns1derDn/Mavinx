import React from 'react';
import Product from '../Product/Product.component';
import { ProductListItemStyled, ProductListStyled } from './ProductList.styled';
import { ProductListData } from './ProductList.data';

const ProductList: React.FC = () => (
  <ProductListStyled>
    {
      ProductListData.map((data, index) => {
        return (
          <ProductListItemStyled key={index}>
            <Product {...data}/>
          </ProductListItemStyled>
        )
      })
    }
  </ProductListStyled>
);

export default ProductList;