export interface IUser {
  phone_number: string;
  password: string;
}

export  type UserToken = {
  status: number;
  refresh: string,
  access: string
}
