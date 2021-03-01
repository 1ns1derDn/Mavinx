export interface IUserRegistration {
  name: String;
  surname: String;
  name_customer: String;
  email: String;
  phone: String;
  role: Number;
  password: String;
  password_confirmation: String;
}

export interface IUserLogin {
  email: String;
  password: String;
}

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

export interface IEditUser {
  name: string;
  surname: string;
  name_customer: string;
  role: string;
}

