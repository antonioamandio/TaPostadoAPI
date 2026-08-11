import { Router } from 'express'
import { userController } from '../container.js'

const userRouter = Router()

userRouter.get('/', async (req, res) => userController.findAll(req, res))

userRouter.get('/:id', async (req, res) => userController.findById(req, res))

userRouter.get('/email/:email', async (req, res) =>
    userController.findByEmail(req, res),
)

userRouter.post('/', async (req, res) => userController.create(req, res))

userRouter.patch('/:id', async (req, res) => userController.update(req, res))

userRouter.delete('/:id', async (req, res) => userController.delete(req, res))

export { userRouter }
