import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { upload } from '../config/cloudinary';

const router = Router();
const userController = new UserController();

// Optional upload middleware that handles Cloudinary errors gracefully
const optionalUpload = (req: any, res: any, next: any) => {
  upload.single('photo')(req, res, (err: any) => {
    if (err) {
      console.error('Cloudinary upload error:', err);
      // Continue without photo if Cloudinary fails
      req.file = undefined;
    }
    next();
  });
};

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', optionalUpload, userController.createUser);
router.put('/:id', optionalUpload, userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
