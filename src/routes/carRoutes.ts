import { Router } from 'express';
import CarController from '../controllers/carController';

const router = Router();
const controller = new CarController();

router.post('/', controller.create.bind(controller));
router.get('/', controller.getAll.bind(controller));
router.get('/:id', controller.getById.bind(controller));
router.delete('/:id', controller.delete.bind(controller));

export default router;
