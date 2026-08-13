import express from 'express'
import { router } from './routes/index.js'

const PORT = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
    console.log(
        `Server running on: ${process.env.URL || 'http://localhost'}:${PORT}`,
    )
})
