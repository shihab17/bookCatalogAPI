"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const zod_1 = require("zod");
const loginUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
    }),
});
const signupUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        confirmPassword: zod_1.z.string({
            required_error: 'Confirm Password is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
    }),
});
exports.authValidation = {
    loginUserZodSchema,
    signupUserZodSchema
};
