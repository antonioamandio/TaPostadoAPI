import express from 'express'
import { router } from './routes/index.js'

const PORT = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use('/', router)

/*
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
}
*/

app.listen(PORT, () => {
    console.log(
        `Server running on: ${process.env.URL || 'http://localhost'}:${PORT}`,
    )
})
