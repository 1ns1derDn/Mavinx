import React, { useState } from 'react';
import {
  SelectStyled,
  SelectHeadStyled,
  SelectListItemStyled,
  SelectListStyled,
  SelectIconStyled,
  SelectOverlaidStyled
} from './Select.styled';
import Button from '../Button/Button.component'
import arrowDown from './arrow-down.svg'

const Select: React.FC = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('USD');

  const onClickOpen = () => {
    setOpen((prevState) => !prevState)
  };

  const onClickChangeValue = (e: any) => {
    setValue(e.target.value)
    setOpen((prevState) => !prevState)
  };

  return (
    <SelectStyled>
      <SelectHeadStyled onClick={onClickOpen}>
        {value}
        <SelectIconStyled src={arrowDown} />
      </SelectHeadStyled>
      {
        open ? (
          <>
            <SelectOverlaidStyled onClick={onClickOpen} />
            <SelectListStyled>
              <SelectListItemStyled>
                <Button
                  fullWidth
                  type='button'
                  as='input'
                  value='USD'
                  onClick={onClickChangeValue} />

              </SelectListItemStyled>
              <SelectListItemStyled>
                <Button fullWidth
                  type='button'
                  as='input'
                  value='RUB'
                  onClick={onClickChangeValue} />

              </SelectListItemStyled>
              <SelectListItemStyled>
                <Button fullWidth
                  type='button'
                  as='input'
                  value='UA'
                  onClick={onClickChangeValue} />
              </SelectListItemStyled>
            </SelectListStyled>
          </>
        ) : null
      }
    </SelectStyled>
  );
}

export default Select;