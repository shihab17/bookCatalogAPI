import { Request, Response } from 'express';
import httpStatus from 'http-status';
const login = async (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send({});
};
export const authController = {
  login,
};
