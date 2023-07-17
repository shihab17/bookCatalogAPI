import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { ILoginUserResponse, IUser } from './auth.interface';
import catchAsync from '../../../shared/catchAsync';
import { authService } from './auth.service';
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
const signUp = catchAsync(async (req: Request, res: Response) => {
    const user = req.body;
    if (user.password != user.confirmPassword){
        throw new Error('Password and confirm password do not match');
    }
    delete user.confirmPassword;
    const result = await authService.createUser(user);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  });
export const authController = {
  login,
  signUp
};
