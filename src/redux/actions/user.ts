import { UserActionsType, ISetUser, IUser, IUpdateUser, IFieldUpdate } from '../types/userTypes';

export const setUser = (user: IUser): ISetUser => ({
  type: UserActionsType.SET_USER,
  payload: user
})

export const logout = () => ({
  type: UserActionsType.LOGOUT,
})

export const updateUser = (data: IFieldUpdate): IUpdateUser => ({
  type: UserActionsType.UPDATE_USER,
  payload: data
})
