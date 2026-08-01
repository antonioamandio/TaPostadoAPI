export class UserController {
    #userService

    constructor(userService) {
        this.#userService = userService
    }

    async create(req, res) {
        const user = await this.#userService.create(req.body)

        return res.status(201).json(user)
    }

    async findAll(req, res) {
        const users = await this.#userService.findAll()

        return res.status(200).json(users)
    }

    async findByEmail(req, res) {
        const { email } = req.params

        const user = await this.#userService.findByEmail(email)

        return res.status(200).json(user)
    }

    async findById(req, res) {
        const { id } = req.params

        const user = await this.#userService.findById(id)

        return res.status(200).json(user)
    }

    async update(req, res) {
        const { id } = req.params

        const user = await this.#userService.update(id, req.body)

        return res.status(200).json(user)
    }

    async delete(req, res) {
        const { id } = req.params

        await this.#userService.delete(id)

        return res.status(204)
    }
}
