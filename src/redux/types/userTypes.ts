export interface IUser {
  admin: number;
  company_id: number;
  created_at: string;
  email: string;
  email_verified_at: any;
  id: number;
  name: string;
  name_customer: string;
  phone: string;
  role: string;
  status: number;
  surname: string;
  updated_at: string;
}

export interface IUserState {
  currentUser: IUser | null;
  isAuth: boolean;
}

export interface ISetUser {
  type: UserActionsType.SET_USER;
  payload: IUser;
}

export interface ILogout {
  type: UserActionsType.LOGOUT;
}

export interface IFieldUpdate {
  name: string;
  surname: string;
  name_customer: string;
  role: string;
}

export interface IUpdateUser {
  type: UserActionsType.UPDATE_USER;
  payload: IFieldUpdate;
}

export enum UserActionsType {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
  UPDATE_USER = 'UPDATE_USER',
}

export type UserAction = ISetUser | ILogout | IUpdateUser











