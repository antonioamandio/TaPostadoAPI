export class PostService {
    #postRepository

    constructor(postRepository) {
        this.#postRepository = postRepository
    }

    async create(data) {
        return this.#postRepository.create(data)
    }

    async findAll() {
        return this.#postRepository.findAll()
    }

    async findByAuthor(authorId) {
        return this.#postRepository.findByAuthor(authorId)
    }

    async findById(id) {
        return this.#postRepository.findById(id)
    }

    async update(id, data) {
        return this.#postRepository.update(id, data)
    }

    async delete(id) {
        return this.#postRepository.delete(id)
    }
}
