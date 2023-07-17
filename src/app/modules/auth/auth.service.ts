import { IUser } from './auth.interface';
import { User } from './auth.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

export const authService = {
  createUser,
};
