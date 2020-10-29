import { Request, Response } from "express";
import { CreateCatUseCase } from "./CreateCatUseCase";

export class CreateCatController {
    constructor(
        private createCatUseCase: CreateCatUseCase,
    ){}
    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email, password } = request.body;

        try {
            await this.createCatUseCase.execute({
                name,
                email,
                password
            })
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            })
            
        }
            
    }
}