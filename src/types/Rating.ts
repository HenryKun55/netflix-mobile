import { IUser } from "./IUser";

export interface Rating {
    _id: string,
    user: IUser,
    message: string,
    rating: number,
    users: string[]
}