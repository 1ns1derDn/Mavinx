import React, { useState } from 'react';
import {
  UserStyled,
  UserWrapperStyled,
  UserListItemStyled,
  UserListStyled
} from './User.styled';
import userIcon from './user.svg';

import { ISharedMargin } from '../../shared/shared.styled';
import Button from '../Button/Button.component';
import { logout } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';

const User: React.FC<ISharedMargin> = (props) => {

  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  return (
    <UserWrapperStyled {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <UserStyled src={userIcon} />
      {
        hover ? (
          <UserListStyled>
            <UserListItemStyled>
              <Button variant='link' to='/edit-user' fullWidth>
                Редактировать
              </Button>
            </UserListItemStyled>
            <UserListItemStyled>
              <Button as='button' fullWidth onClick={() => dispatch(logout())}>
                Выход
              </Button>
            </UserListItemStyled>
          </UserListStyled>
        ) : null
      }
    </UserWrapperStyled>
  );
};

export default User;