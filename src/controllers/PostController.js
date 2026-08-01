export class PostController {
    #postService

    constructor(postService) {
        this.#postService = postService
    }

    async create(req, res) {
        const post = await this.#postService.create(req.body)

        return res.status(201).json(post)
    }

    async findAll(req, res) {
        const posts = await this.#postService.findAll()

        return res.status(200).json(posts)
    }

    async findById(req, res) {
        const { id } = req.params

        const post = await this.#postService.findById(id)

        return res.status(200).json(post)
    }

    async update(req, res) {
        const { id } = req.params

        const post = await this.#postService.update(id, req.body)

        return res.status(200).json(post)
    }

    async delete(req, res) {
        const { id } = req.params

        const post = await this.#postService.delete(id)

        return res.sendStatus(204)
    }
}
