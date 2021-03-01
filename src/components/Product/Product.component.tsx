import React from 'react';

import {
  ProductStyled,
  ProductBoxStyled,
  ProductInfoStyled,
} from './Product.styled';

import Typography from '../Typography/Typography.component';
import Tag from '../Tag/Tag.component';

import { IProductListData } from '../ProductList/ProductList.data';
import {
  TagListStyled,
  TagListItemStyled
} from '../Tag/Tag.styled';

const Product: React.FC<IProductListData> = ({
  title,
  text,
  price,
  date,
  tag
}) => (
  <ProductStyled>
    <ProductInfoStyled>
      <Typography mb="15px" as="h3" variant="headline-1">
        {title}
      </Typography>
      <Typography variant='body' mb='20px'>
        {text}
      </Typography>
      <TagListStyled>
        {
          tag.map((item, index) => {
            return (
              <TagListItemStyled key={index}>
                <Tag tag={item} />
              </TagListItemStyled>
            )
          })
        }
      </TagListStyled>
    </ProductInfoStyled>
    <ProductBoxStyled>
      <Typography as="h3" variant="headline-1">
        {price}$
      </Typography>
      <Typography as="h3" variant="headline-1">
        {date}
      </Typography>
    </ProductBoxStyled>
  </ProductStyled>
);

export default Product;