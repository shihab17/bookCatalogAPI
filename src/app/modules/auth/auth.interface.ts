import { Model, Types } from "mongoose";

export type IUser = {
    _id: Types.ObjectId;
    email: string;
    password: string;
  };
export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};
export type UserModel = {
    isUserExist(
      id: string
    ): Promise<Pick<IUser, 'email' | 'password'>>;
    isUserExistWithPhone(
      phoneNumber: string
    ): Promise<Pick<IUser, 'email' | 'password'>>;
    isPasswordMatched(
      givenPassword: string,
      savedPassword: string
    ): Promise<boolean>;
  } & Model<IUser>;