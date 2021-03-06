import 'dotenv/config'

import express from 'express';
import cors from 'cors';

import routes from './routes';

class Server {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new Server().express;