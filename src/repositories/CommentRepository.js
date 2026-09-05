export class CommentRepository {
    #prisma

    constructor(prisma) {
        this.#prisma = prisma
    }

    async create(data) {
        return this.#prisma.comment.create({ data })
    }

    async findAll() {
        return this.#prisma.comment.findMany()
    }

    async findById(id) {
        return this.#prisma.comment.findUnique({
            where: { id },
        })
    }

    async findByPost(postId) {
        return this.#prisma.comment.findMany({
            where: {
                postId,
            },
        })
    }

    async update(id, data) {
        return this.#prisma.comment.update({
            where: { id },
            data,
        })
    }

    async delete(id) {
        return this.#prisma.comment.delete({
            where: { id },
        })
    }
}
