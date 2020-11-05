"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = __importStar(require("./swagger.json"));
const bodyParser = __importStar(require("body-parser"));
const api_1 = __importDefault(require("./api"));
class App {
    constructor() {
        this.Start = (port) => {
            return new Promise((resolve, reject) => {
                this.httpServer.listen(port, () => {
                    resolve(port);
                })
                    .on('error', (err) => reject(err));
            });
        };
        this.httpServer = express_1.default();
        this.httpServer.use(bodyParser.urlencoded({ extended: true }));
        this.httpServer.use(bodyParser.json());
        // Desenha o Swagger
        this.httpServer.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
        // API
        api_1.default.reduce((router) => this.httpServer.use('/api', require(`./api/${router}`)));
        api_1.default.reduce((router) => this.httpServer.use('/', require(`./api/${router}`)));
        // Configuração do CORS
        this.httpServer.use(cors_1.default({
            exposedHeaders: 'Authorization'
        }));
    }
}
exports.default = App;
