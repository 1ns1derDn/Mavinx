import React, { useState } from 'react';
import { TagStyled, CloseStyled } from './Tag.styled';
import { ITag } from './Tag.types';
import Typography from '../Typography/Typography.component';

const Tag: React.FC<ITag> = ({
  tag,
  background,
  closeHover,
  onClick },
  ...props
) => {
  const [close, setClose] = useState(false);

  return (
    <TagStyled
      background={background}
      close={close}
      onClick={onClick}
      onMouseEnter={() => setClose(true)}
      onMouseLeave={() => setClose(false)}
      {...props}>
      <Typography
        variant='headline-2'
        as='span'>
        {tag}
      </Typography>
      { close && closeHover ? <CloseStyled>X</CloseStyled> : null}
    </TagStyled>
  )
}

export default Tag;