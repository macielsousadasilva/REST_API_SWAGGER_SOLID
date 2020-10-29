/*
    Metodo ou formato de funções que poderão ser aceitas
*/
import { Cat } from "../entities/Cat";

export interface ICatsRepository {
    // verifica se existe um email
    findByEmail(email: string): Promise<Cat>
    save(cat: Cat): Promise<void>;
}