import express from 'express';
import { bookController } from './book.controller';
import validateRequest from '../../middleware/validateRequest';
import { bookValidation } from './book.validation';
const router = express.Router();

router.post('/', validateRequest(bookValidation.createBookZodSchema), bookController.createBook);
router.get('/', bookController.getAllBook);
export const BookRoutes = router;
