"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostgresCatsRepository {
    constructor() {
        this.cats = [];
    }
    async findByEmail(email) {
        const cats = this.cats.find(cat => cats.email === email);
        return cats;
    }
    async save(cat) {
        this.cats.push(cat);
    }
}
exports.PostgresCatsRepository = PostgresCatsRepository;
