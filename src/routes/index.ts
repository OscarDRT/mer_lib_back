import { Router } from 'express';
import { ItemController } from '../controllers/ItemController';

const router = Router();
const itemController: ItemController = new ItemController();

router.get('/', itemController.search);
router.get('/:id', itemController.getItemById);

export { router as itemRouter };
