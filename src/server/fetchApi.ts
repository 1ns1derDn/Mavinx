import axios from 'axios';
import { URL } from './apiUrl';
import { Dispatch } from 'react';
import { UserAction } from '../redux/types/userTypes';
import { setUser, updateUser } from '../redux/actions/user';
import { IUserLogin, IUserRegistration, IEditUser } from '../types/user.types';

export const registration = async (data: IUserRegistration) => {
  try {
    const response = await axios.post(`${URL}register`, data);
    alert(response.data.message);
  } catch (e) {
    alert(e);
  }
}

export const login = (data: IUserLogin, history: any) => async (dispatch: Dispatch<UserAction>) => {
  try {
    const response = await axios.post(`${URL}login`, {
      email: data.email,
      password: data.password,
    });

    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
    history.push('/products');
  } catch (e) {
    alert(e);
  }
}

export const editUser = (data: IEditUser) => async (dispatch: Dispatch<UserAction>) => {
  try {
    
    const response = await axios.post(`${URL}edit-user`, data, {
      headers: { Authorization: localStorage.getItem('token') }
    });
    
    if(response.status === 200) {
      const role = +data.role > 1 ? 'customer' : 'provider';
      dispatch(updateUser({...data, role}));
      alert("Данные изменены");
    }
  } catch (e) {
    alert(e);
  }
}
