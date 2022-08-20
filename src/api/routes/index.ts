import { Router } from 'express'
import userRouter from './user.route'
import buddySavingsRouter from './buddy_saving.route'

const router = Router()

router.use('/users', userRouter);
router.use('/buddySavings', buddySavingsRouter);

export default router