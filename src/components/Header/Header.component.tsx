import React from 'react';
import {
  HeaderStyled,
  HeaderInnerStyled,
  HeaderWrapperStyled
} from './Header.styled';
import Logotype from '../Logotype/Logotype.component';
import SearchBar from '../SearchBar/SearchBar.component';
import Nav from '../Nav/Nav.component';
import User from '../User/User.component';
import Container from '../Container/Container.component';
import Button from '../Button/Button.component';

const Header: React.FC = () => (
  <HeaderStyled>
    <Container>
      <HeaderInnerStyled>
        <Logotype border />
        <SearchBar ml="30px" mr="auto" />
        <HeaderWrapperStyled>
          <Nav />
          <Button
            border
            as='button'
            to='/'
            ml="20px"
          >
            Создать проект
          </Button>
          <User ml="30px" />
        </HeaderWrapperStyled>
      </HeaderInnerStyled>
    </Container>
  </HeaderStyled>
);

export default Header;