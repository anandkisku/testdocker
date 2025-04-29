import { Router } from 'express';
import { getUser } from '../Controllers/userRoutes.js'; // ✅ .js extension required

const router = Router();

router.get('/user', getUser);

export default router;