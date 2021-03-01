import React from 'react';
import {
  NavStyled,
  NavListItemStyled,
  NavListStyled
} from './Nav.styled';
import Button from '../Button/Button.component';

const Nav: React.FC = () => (
  <NavStyled>
    <NavListStyled>
      <NavListItemStyled>
        <Button to='/'>
          Эсперты
        </Button>
      </NavListItemStyled>
      <NavListItemStyled>
        <Button to='/'>
          Вопросы
        </Button>
      </NavListItemStyled>
      <NavListItemStyled>
        <Button to='/'>
          О нас
        </Button>
      </NavListItemStyled>
    </NavListStyled>
  </NavStyled>
);

export default Nav;