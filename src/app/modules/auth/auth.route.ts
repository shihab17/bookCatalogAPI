import express from 'express';
import { authController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { authValidation } from './auth.validation';
import auth from '../../middleware/auth';
const router = express.Router();

router.post(
  '/login',
  validateRequest(authValidation.loginUserZodSchema),
  authController.login
);
router.post(
  '/signup',
  validateRequest(authValidation.signupUserZodSchema), auth,
  authController.signUp
);
export const AuthRoutes = router;
