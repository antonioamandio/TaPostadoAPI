export class CommentService {
    #commentRepository

    constructor(commentRepository) {
        this.#commentRepository = commentRepository
    }

    async create(data) {
        return this.#commentRepository.create(data)
    }

    async findAll(postId) {
        if (postId) {
            return this.#commentRepository.findByPost(postId)
        }

        return this.#commentRepository.findAll()
    }

    async findById(id) {
        return this.#commentRepository.findById(id)
    }

    async findByPost(postId) {
        return this.#commentRepository.findByPost(postId)
    }

    async update(id, data) {
        return this.#commentRepository.update(id, data)
    }

    async delete(id) {
        return this.#commentRepository.delete(id)
    }
}
