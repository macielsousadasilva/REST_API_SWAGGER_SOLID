import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresCatsRepository } from "../../repositories/implementations/PostgresCatsRepository";
import { CreateCatController } from "./CreateCatController";
import { CreateCatUseCase } from "./CreateCatUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresCatsRepository = new PostgresCatsRepository();

const createCatUseCase = new CreateCatUseCase(
    postgresCatsRepository,
    mailtrapMailProvider
)

const createCatController = new CreateCatController(
    createCatUseCase
)

export { createCatUseCase, createCatController }