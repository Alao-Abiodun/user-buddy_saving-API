import { Router, Request, Response } from 'express'
import * as budySavingController from '../controllers/buddy_saving/buddy_saving.controller';
import { CreateBuddySavingDTO } from '../dto/buddy_saving.dto';

const buddySavingsRouter = Router()

buddySavingsRouter.post('/create', async (req: Request, res: Response) => {
  // create buddy savings
  const payload:CreateBuddySavingDTO = req.body
  const result = await budySavingController.create(payload)
  return res.status(200).send({
    message: 'Buddy Savings created successfully',
    result
  })
})

export default buddySavingsRouter