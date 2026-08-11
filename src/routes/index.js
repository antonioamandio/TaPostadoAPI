import { Router } from 'express'
import { userRouter } from './UserRoute.js'

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

rootRouter.use('/users', userRouter)

export { rootRouter as router }
