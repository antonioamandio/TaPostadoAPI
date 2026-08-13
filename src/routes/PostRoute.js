import { Router } from 'express'
import { postController } from '../container.js'

const postRouter = Router()

postRouter.get('/', async (req, res) => postController.findAll(req, res))

postRouter.get('/:id', async (req, res) => postController.findById(req, res))

postRouter.post('/', async (req, res) => postController.create(req, res))

postRouter.patch('/:id', async (req, res) => postController.update(req, res))

postRouter.delete('/:id', async (req, res) => postController.delete(req, res))

export { postRouter }
