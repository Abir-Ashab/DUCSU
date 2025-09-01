import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { upload } from '../config/cloudinary';

const router = Router();
const userController = new UserController();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', upload.single('photo'), userController.createUser);
router.put('/:id', upload.single('photo'), userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
