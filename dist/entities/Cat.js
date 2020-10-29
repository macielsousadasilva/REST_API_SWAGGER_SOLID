"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Cat {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid_1.v4();
        }
    }
}
exports.Cat = Cat;
