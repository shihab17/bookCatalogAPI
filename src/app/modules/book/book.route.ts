import express from 'express';
import { bookController } from './book.controller';
import validateRequest from '../../middleware/validateRequest';
import { bookValidation } from './book.validation';
import auth from '../../middleware/auth';
const router = express.Router();

router.post('/', validateRequest(bookValidation.createBookZodSchema), auth, bookController.createBook);
router.get('/', bookController.getAllBook);
router.put('/:id', validateRequest(bookValidation.updateBookZodSchema), auth, bookController.updateBook);
router.delete('/:id', auth, bookController.deleteBook);
router.get('/:id', bookController.getSingleBook);
export const BookRoutes = router;
