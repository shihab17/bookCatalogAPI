"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const book_validation_1 = require("./book.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(book_validation_1.bookValidation.createBookZodSchema), auth_1.default, book_controller_1.bookController.createBook);
router.get('/', book_controller_1.bookController.getAllBook);
router.put('/:id', (0, validateRequest_1.default)(book_validation_1.bookValidation.updateBookZodSchema), auth_1.default, book_controller_1.bookController.updateBook);
router.delete('/:id', auth_1.default, book_controller_1.bookController.deleteBook);
router.get('/:id', book_controller_1.bookController.getSingleBook);
exports.BookRoutes = router;
