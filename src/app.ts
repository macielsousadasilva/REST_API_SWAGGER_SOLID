import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'
import * as bodyParser from 'body-parser'
import api from './api';  

class App {
  public httpServer: any

  constructor() {
    this.httpServer = express()

    this.httpServer.use(bodyParser.urlencoded({ extended: true }));
    this.httpServer.use(bodyParser.json());
    
    // Desenha o Swagger
    this.httpServer.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

    // API
    api.reduce((router) => this.httpServer.use('/api', require(`./api/${router}`)) );
    api.reduce((router) => this.httpServer.use('/', require(`./api/${router}`)) );

    // Configuração do CORS
    this.httpServer.use(cors({
        exposedHeaders: 'Authorization'
    }))
  }

  public Start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.httpServer.listen(
        port,
        () => {
          resolve(port)
        })
        .on('error', (err: object) => reject(err));
    })
  }
}

export default App;
