import express from 'express';
import { bookController } from './book.controller';
import validateRequest from '../../middleware/validateRequest';
import { bookValidation } from './book.validation';
import auth from '../../middleware/auth';
const router = express.Router();

router.post('/', validateRequest(bookValidation.createBookZodSchema), auth, bookController.createBook);
router.get('/',auth, bookController.getAllBook);
router.put('/', validateRequest(bookValidation.updateBookZodSchema), auth, bookController.updateBook);
router.delete('/', auth, bookController.deleteBook);
router.get('/:id',auth, bookController.getSingleBook);
export const BookRoutes = router;
