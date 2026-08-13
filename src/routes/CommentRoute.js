import { Router } from 'express'
import { commentController } from '../container.js'

const commentRouter = Router()

commentRouter.get('/', async (req, res) => commentController.findAll(req, res))

commentRouter.get('/:id', async (req, res) =>
    commentController.findById(req, res),
)

commentRouter.post('/', async (req, res) => commentController.create(req, res))

commentRouter.patch('/:id', async (req, res) =>
    commentController.update(req, res),
)

commentRouter.delete('/:id', async (req, res) =>
    commentController.delete(req, res),
)

export { commentRouter }
