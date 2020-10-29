/*
    Aqui e onde ira toda a regra de negocio
*/

import { ICatsRepository } from "../../repositories/ICatsRepository";
import { ICreateCatRequestDTO } from "./CreateCatDTO";
import { Cat } from "../../entities/Cat";
import { IMailProvider } from "../../providers/IMailProvider";


export class CreateCatUseCase {

    constructor(
        private catsRepository: ICatsRepository,
        private mailProvider: IMailProvider,
    ) {}

    async execute(data: ICreateCatRequestDTO) {
        const catAlreadyExists = await this.catsRepository.findByEmail(data.email);

        if (catAlreadyExists) {
            throw new Error("Cat already exists.");
        }

        const cat = new Cat(data);

        await this.catsRepository.save(cat);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: "Equipe do meu app",
                email: "equipe@meuapp.com",
            },
            subject: "Seja bem vindo",
            body: "<p>Você já pode fazer login</p>"
        })
    }
}