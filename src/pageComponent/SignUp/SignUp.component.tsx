import React, { useRef } from 'react';
import AuthLayout from '../../layout/AuthLayout/AuthLayout.component';
import Button from '../../components/Button/Button.component';
import Typography from '../../components/Typography/Typography.component';
import TextField from '../../components/TextField/TextField.component';

import { useForm } from 'react-hook-form';
import { regPhone, regRole } from '../../shared/regex';
import { IUserRegistration } from '../../types/user.types';
import { registration } from '../../server/fetchApi';
import { useHistory } from "react-router-dom";

const SignUp: React.FC = () => {

  const { register, errors, handleSubmit, watch } = useForm();
  const history  = useHistory();
  const password = useRef({});
  password.current = watch('password', '');
  
  const onSubmit = (data: IUserRegistration) => {
    registration({
      name: data.name,
      surname: data.surname,
      name_customer: data.name_customer,
      email: data.email,
      phone: data.phone,
      role: +data.role,
      password: data.password,
      password_confirmation: data.password_confirmation
    })
    history.push('/')
  }

  return (
    <AuthLayout>
      <form onSubmit={(e) => e.preventDefault()}>
        <Typography variant="headline-1" mb="15px">
          Регистрация
      </Typography>

        <TextField
          mb="15px"
          fullWidth
          name="name"
          type="text"
          label="Введите пожалуйста имя"
          placeholder="Ваше имя"
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
          ref={register({
            required: "Поле обязательно для заполнения",
          })}
          error={!!errors.name_customer}
          errorMessage={errors.name_customer?.message}
        />

        <TextField
          mb="15px"
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
          mb="15px"
          fullWidth
          name="phone"
          type="text"
          label="Введите телефон пример (+380980165587)"
          placeholder="Введите телефон"
          ref={register({
            required: "Поле обязательно для заполнения",
            validate: (value) => regPhone.test(value) || 'Формат телефона не верный'
          })}
          error={!!errors.phone}
          errorMessage={errors.phone?.message}
        />

        <TextField
          mb="15px"
          fullWidth
          name="role"
          type="text"
          label="Роль пользователя (1- поставщик, 2-заказчик)"
          placeholder="(1- поставщик, 2-заказчик)"
          ref={register({
            required: "Поле обязательно для заполнения",
            validate: (value) => regRole.test(value) || 'Укажите роль цифрой от 1 - 2'
          })}
          error={!!errors.role}
          errorMessage={errors.role?.message}
        />

        <TextField
          mb="15px"
          fullWidth
          name="password"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          ref={register({
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 6,
              message: "Пароли не совпадают"
            }
          })}
          error={!!errors.password}
          errorMessage={errors.password?.message}
        />

        <TextField
          mb="15px"
          fullWidth
          name="password_confirmation"
          type="password"
          label="Повторите пароль"
          placeholder="Повторите пароль"
          ref={register({
            validate: (value) => value === password.current || "Пароли не совпадают"
          })}
          error={!!errors.password_confirmation}
          errorMessage={errors.password_confirmation?.message}
        />

        <Button onClick={handleSubmit(onSubmit)}
          variant="contained"
          mb="16px"
          fullWidth>
          Зарегистрироваться
        </Button>

        <Button to="/" fullWidth>
          Войти
        </Button>
      </form>
    </AuthLayout>
  )
}

export default SignUp;