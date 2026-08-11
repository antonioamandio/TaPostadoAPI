import { Router } from 'express'
import {
    userController,
    postController,
    commentController,
} from '../container.js'

const rootRouter = Router()

// Endpoint to test API connection
rootRouter.get('/health', (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Server is running',
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        })
    }
})

// User routes
rootRouter.get('/users', async (req, res) => userController.findAll(req, res))

rootRouter.get('/users/:id', async (req, res) =>
    userController.findById(req, res),
)

rootRouter.get('/users/email/:email', async (req, res) =>
    userController.findByEmail(req, res),
)

rootRouter.post('/users', async (req, res) => userController.create(req, res))

rootRouter.patch('/users/:id', async (req, res) =>
    userController.update(req, res),
)

rootRouter.delete('/users/:id', async (req, res) =>
    userController.delete(req, res),
)

export { rootRouter as router }
