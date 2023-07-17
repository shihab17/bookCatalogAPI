"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post('/login', auth_controller_1.authController.login);
router.post('/sginup', (0, validateRequest_1.default)(auth_validation_1.authValidation.signupUserZodSchema), auth_controller_1.authController.signUp);
exports.AuthRoutes = router;
