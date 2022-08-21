import { Router, Request, Response } from 'express'
import * as userController from '../controllers/user/user.controller';
import { CreateUserDTO } from '../dto/user.dto';

const userRouter = Router()

userRouter.post('/signup', async (req: Request, res: Response) => {
  const payload:CreateUserDTO = req.body

  const result = await userController.create(payload)
  return res.status(200).send(result)
})

// for loginUser
userRouter.post('/login', async (req: Request, res: Response) => {
  const {email, password} = req.body 
  const result = await userController.login(email, password)
  return res.status(200).send(result)
} )

export default userRouter