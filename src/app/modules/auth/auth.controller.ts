import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { ILoginUserResponse } from './auth.interface';
import catchAsync from '../../../shared/catchAsync';
const login = catchAsync(async (req: Request, res: Response) => {
    // const { ...loginData } = req.body;
    /* const result = await authService.loginUser(loginData);
    const { refreshToken, ...others } = result;
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };
  
    res.cookie('refreshToken', refreshToken, cookieOptions); */
  
    sendResponse<ILoginUserResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User logged in successfully',
      data: null,
    });
  });
export const authController = {
  login,
};
