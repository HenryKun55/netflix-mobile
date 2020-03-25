export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  token?: string;
  url?: string;
}

export type UserProps = IUser;
