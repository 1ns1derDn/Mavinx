import React from 'react';
import { EditUserStyled } from './EditUser.styled'

import { useForm } from 'react-hook-form';
import TextField from '../../components/TextField/TextField.component';
import Button from '../../components/Button/Button.component';
import UserDataContainer from '../../components/UserData/Container/UserDataContainer'
import { editUser } from '../../server/fetchApi';
import { IEditUser } from '../../types/user.types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { regRole } from '../../shared/regex';

const EditUser: React.FC = () => {

  const currentUser = useTypedSelector(({ user }) => user.currentUser);
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data: IEditUser) => {
    dispatch(editUser(data));
  }

  const role = currentUser?.role === 'customer' ? 2 : 1

  return (
    <EditUserStyled>
      <UserDataContainer />
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          mb="15px"
          fullWidth
          name="name"
          type="text"
          label="Фамилию"
          placeholder="Ваша фамилия"
          defaultValue={currentUser?.name}
          ref={register({
            required: "Поле обязательно для заполнения",
          })}
          error={!!errors.name}
          errorMessage={errors.name?.message}
        />

        <TextField
          mb="15px"
          fullWidth
          name="surname"
          type="text"
          label="Введите пожалуйста фамилию"
          placeholder="Ваша фамилия"
          defaultValue={currentUser?.surname}
          ref={register({
            required: "Поле обязательно для заполнения",
          })}
          error={!!errors.surname}
          errorMessage={errors.surname?.message}
        />

        <TextField
          mb="15px"
          fullWidth
          name="name_customer"
          type="text"
          label="Введите пожалуйста название заказчика"
          placeholder="Название заказчика"
          defaultValue={currentUser?.name_customer}
          ref={register({
            required: "Поле обязательно для заполнения",
          })}
          error={!!errors.name_customer}
          errorMessage={errors.name_customer?.message}
        />

        <TextField
          mb="15px"
          fullWidth
          name="role"
          type="text"
          label="Роль пользователя (1- поставщик, 2-заказчик)"
          placeholder="(1- поставщик, 2-заказчик)"
          defaultValue={role}
          ref={register({
            required: "Поле обязательно для заполнения",
            validate: (value) => regRole.test(value) || 'Укажите роль цифрой от 1 - 2'
          })}
          error={!!errors.role}
          errorMessage={errors.role?.message}
        />

        <Button onClick={handleSubmit(onSubmit)}
          variant="contained"
          mb="16px"
          fullWidth>
          Изменить
        </Button>
      </form>
    </EditUserStyled>
  )
}

export default EditUser;