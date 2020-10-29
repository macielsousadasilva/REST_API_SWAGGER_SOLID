"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCatController {
    constructor(createCatUseCase) {
        this.createCatUseCase = createCatUseCase;
    }
    async handle(request, response) {
        const { name, email, password } = request.body;
        try {
            await this.createCatUseCase.execute({
                name,
                email,
                password
            });
            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.CreateCatController = CreateCatController;
