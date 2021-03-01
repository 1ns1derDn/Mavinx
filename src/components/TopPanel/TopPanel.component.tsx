import React from 'react';
import { TopPanelStyled } from './TopPanel.styled';
import Typography from '../Typography/Typography.component';
import { ITopPanel } from './TopPanel.types';

const TopPanel: React.FC<ITopPanel> = ({ count, ...props}) => (
  <TopPanelStyled {...props}>
    <Typography variant='headline-2' as='span'>
      Найдено
    </Typography>
    <Typography ml="5px" variant='headline-2' as='span'>
      ({count})
    </Typography>
  </TopPanelStyled>
)

export default TopPanel;