import { z } from 'zod';
const loginUserZodSchema = z.object({
  body: z.object({
    password: z.string({
      required_error: 'Password is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
  }),
});
const signupUserZodSchema = z.object({
  body: z.object({
    password: z.string({
      required_error: 'Password is required',
    }),
    confirmPassword: z.string({
      required_error: 'Confirm Password is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
  }),
});

export const authValidation = {
  loginUserZodSchema,
  signupUserZodSchema
};
