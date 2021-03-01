import React from 'react';

import Button from '../../components/Button/Button.component';
import TextField from '../../components/TextField/TextField.component';

import AuthLayout from '../../layout/AuthLayout/AuthLayout.component';
import Typography from '../../components/Typography/Typography.component';

import { useForm } from 'react-hook-form';
import { login } from '../../server/fetchApi';
import { useDispatch } from 'react-redux';
import { IUserLogin } from '../../types/user.types';
import { useHistory } from 'react-router-dom'

const SignIn: React.FC = () => {

  const { register, errors, handleSubmit, } = useForm();

  const dispatch = useDispatch();
  const history = useHistory()
  const onSubmit = (data: IUserLogin) => {
    dispatch(login({
      email: data.email,
      password: data.password,
    }, history))
  }
  return (
    <AuthLayout>
      <form onSubmit={(e) => e.preventDefault()}>
        <Typography variant="headline-1" mb="30px">Вход в аккаунт</Typography>

        <TextField
          mb="30px"
          fullWidth
          name="email"
          type="email"
          label="Email"
          placeholder="Введите адрес эл. почты"
          ref={register({
            required: "Поле обязательно для заполнения",
          })}
          error={!!errors.email}
          errorMessage={errors.email?.message}
        />

        <TextField
          mb="30px"
          fullWidth
          name="password"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          ref={register({
            required: "Поле обязательно для заполнения",
          })}
          error={!!errors.password}
          errorMessage={errors.password?.message}
        />

        <Button onClick={handleSubmit(onSubmit)} variant="contained" mb="16px" fullWidth>
          Войти
        </Button>

        <Button
          variant='link'
          to="/signup"
          fullWidth
        >
          Зарегистрироваться
      </Button>
      </form>
    </AuthLayout>
  );
}

export default SignIn;