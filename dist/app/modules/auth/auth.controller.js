"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const auth_service_1 = require("./auth.service");
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { ...loginData } = req.body;
    /* const result = await authService.loginUser(loginData);
      const { refreshToken, ...others } = result;
      const cookieOptions = {
        secure: config.env === 'production',
        httpOnly: true,
      };
    
      res.cookie('refreshToken', refreshToken, cookieOptions); */
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User logged in successfully',
        data: null,
    });
}));
const signUp = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    if (user.password != user.confirmPassword) {
        throw new Error('Password and confirm password do not match');
    }
    delete user.confirmPassword;
    const result = yield auth_service_1.authService.createUser(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User created successfully',
        data: result,
    });
}));
exports.authController = {
    login,
    signUp
};
