import React from 'react';
import {
  MainLayoutStyled,
  MainLayoutAsideStyled,
  MainLayoutMainStyled,
  MainLayoutWrapperStyled,
  MainLayoutLineStyled
} from './MainLayout.styled'
import Container from '../../components/Container/Container.component'
import Header from '../../components/Header/Header.component';
import FilterControl from '../../components/FilterControl/FilterControl.components'
import FilterCategoriesContainer from '../../components/FilterCategories/container/FilterCategoriesContainer'
import RangeCost from '../../components/RangeCost/RangeCost.component'


const MainLayout: React.FC = ({ children }) => {
  return (
    <MainLayoutStyled>
      <Header />
      <Container>
        <MainLayoutWrapperStyled>
          <MainLayoutAsideStyled>
            <MainLayoutLineStyled>
              <FilterControl />
            </MainLayoutLineStyled>
            <MainLayoutLineStyled>
              <FilterCategoriesContainer />
            </MainLayoutLineStyled>
            <MainLayoutLineStyled>
              <RangeCost />
            </MainLayoutLineStyled>
          </MainLayoutAsideStyled>
          <MainLayoutMainStyled>
            {children}
          </MainLayoutMainStyled>
        </MainLayoutWrapperStyled>
      </Container>
    </MainLayoutStyled>
  )
}

export default MainLayout;