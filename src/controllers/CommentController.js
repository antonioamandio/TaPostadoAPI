export class CommentController {
    #commentService

    constructor(commentService) {
        this.#commentService = commentService
    }

    async create(req, res) {
        const comment = await this.#commentService.create(req.body)

        return res.status(201).json(comment)
    }

    async findAll(req, res) {
        const { postId } = req.query

        const comments = await this.#commentService.findAll(postId)

        return res.status(200).json(comments)
    }

    async findById(req, res) {
        const { id } = req.params

        const comment = await this.#commentService.findById(id)

        return res.status(200).json(comment)
    }

    async findByPost(req, res) {
        const { postId } = req.query

        const comments = await this.#commentService.findByPost(postId)

        return res.status(200).json(comments)
    }

    async update(req, res) {
        const { id } = req.params

        const comment = await this.#commentService.update(id, req.body)

        return res.status(200).json(comment)
    }

    async delete(req, res) {
        const { id } = req.params

        await this.#commentService.delete(id)

        return res.sendStatus(204)
    }
}
