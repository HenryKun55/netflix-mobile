export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  token?: string;
  url?: string;
  urlImage?: string;
}

export type UserProps = IUser;
