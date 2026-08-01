import express from 'express'

const PORT = process.env.PORT || 3333
const app = express()

app.use(express.json())

// Endpoint to test API connection
app.get('/health', (req, res) => {
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

/*
// Temporary Endpoints Tests
import {
    userController,
    postController,
    commentController,
} from './container.js'

{
    // Temporary User Endpoints
    app.get('/users', async (req, res) => {
        return userController.findAll(req, res)
    })

    app.get('/users/:id', async (req, res) => {
        return userController.findById(req, res)
    })

    app.post('/users', async (req, res) => {
        return userController.create(req, res)
    })

    app.patch('/users/:id', async (req, res) => {
        return userController.update(req, res)
    })

    app.delete('/users/:id', async (req, res) => {
        return userController.delete(req, res)
    })
}

{
    // Temporary Post Endpoints
    app.get('/posts', async (req, res) => {
        return postController.findAll(req, res)
    })

    app.get('/posts/:id', async (req, res) => {
        return postController.findById(req, res)
    })

    app.post('/posts', async (req, res) => {
        return postController.create(req, res)
    })

    app.patch('/posts/:id', async (req, res) => {
        return postController.update(req, res)
    })

    app.delete('/posts/:id', async (req, res) => {
        return postController.delete(req, res)
    })
}

{
    // Temporary Comment Endpoints
    app.get('/comments', async (req, res) => {
        return commentController.findAll(req, res)
    })

    app.get('/comments/:id', async (req, res) => {
        return commentController.findById(req, res)
    })

    app.post('/comments', async (req, res) => {
        return commentController.create(req, res)
    })

    app.patch('/comments/:id', async (req, res) => {
        return commentController.update(req, res)
    })

    app.delete('/comments/:id', async (req, res) => {
        return commentController.delete(req, res)
    })
}*/

app.listen(PORT, () => {
    console.log(
        `Server running on: ${process.env.URL || 'http://localhost'}:${PORT}`,
    )
})
