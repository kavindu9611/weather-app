import { Router } from 'express';
import { getAllWeather} from '../controllers/weatherController';
import authMiddleware from '../middleware/auth';

const router = Router();
router.use(authMiddleware);

router.get('/', getAllWeather);

export default router;