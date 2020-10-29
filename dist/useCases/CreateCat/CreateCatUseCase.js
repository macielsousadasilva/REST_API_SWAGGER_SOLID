"use strict";
/*
    Aqui e onde ira toda a regra de negocio
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Cat_1 = require("../../entities/Cat");
class CreateCatUseCase {
    constructor(catsRepository, mailProvider) {
        this.catsRepository = catsRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        const catAlreadyExists = await this.catsRepository.findByEmail(data.email);
        if (catAlreadyExists) {
            throw new Error("Cat already exists.");
        }
        const cat = new Cat_1.Cat(data);
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
        });
    }
}
exports.CreateCatUseCase = CreateCatUseCase;
