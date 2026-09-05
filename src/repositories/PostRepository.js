export class PostRepository {
    #prisma

    constructor(prisma) {
        this.#prisma = prisma
    }

    async create(data) {
        return this.#prisma.post.create({ data })
    }

    async findAll() {
        return this.#prisma.post.findMany()
    }

    async findByAuthor(authorId) {
        return this.#prisma.post.findMany({
            where: {
                authorId,
            },
        })
    }

    async findById(id) {
        return this.#prisma.post.findUnique({
            where: { id },
        })
    }

    async update(id, data) {
        return this.#prisma.post.update({
            where: { id },
            data,
        })
    }

    async delete(id) {
        return this.#prisma.post.delete({
            where: { id },
        })
    }
}
