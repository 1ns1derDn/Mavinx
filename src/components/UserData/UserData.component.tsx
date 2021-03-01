import React from 'react';
import {
  UserDataListItemStyled,
  UserDataListStyled
} from './UserData.styled';
import Typography from '../Typography/Typography.component'
import { IUserData } from './UserData.types'

const UserData: React.FC<IUserData> = ({
  userArrData
}) => {
  return (
    <UserDataListStyled>
      {
        userArrData.map((userData, index) => {
          return (
            <UserDataListItemStyled key={index}>
              <Typography mr='8px' variant='headline-2' as='strong'>
                {userData.title}
              </Typography>
              {userData.field}
            </UserDataListItemStyled>
          )
        })
      }
    </UserDataListStyled>
  )
}

export default UserData;