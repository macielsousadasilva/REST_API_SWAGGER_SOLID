import { ICatsRepository } from "../ICatsRepository";
import { Cat } from "../../entities/Cat";

export class PostgresCatsRepository implements ICatsRepository {

    private cats: Cat[] = [];

    async findByEmail(email: string): Promise<Cat>{
        const cats = this.cats.find(cat => cats.email === email);
        return cats;
    }

    async save(cat: Cat): Promise<void> {
        this.cats.push(cat);
    } 
}