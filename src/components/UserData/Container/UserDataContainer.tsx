import React from 'react';
import UserData from '../UserData.component';
import { useTypedSelector } from '../../../hooks/useTypedSelector' 

const UserDataContainer: React.FC = () => {
  const currentUser = useTypedSelector(({ user }) => user.currentUser);
  const userArrData = [
    {title: 'Имя', field: currentUser?.name},
    {title: 'Фамилия', field: currentUser?.surname},
    {title: 'Название заказчика', field: currentUser?.name_customer},
    {title: 'Роль', field: currentUser?.role},
  ]
  return (
    <UserData userArrData={userArrData}/>
  )
}

export default UserDataContainer;