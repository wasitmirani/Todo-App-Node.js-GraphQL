


import express, { Application } from 'express'
import morgan from 'morgan'
import apiRouter from "./routes/api";
import bodyParser from 'body-parser';

require('dotenv').config();



export class App {
    app: Application;
    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        // this.middleware();
        // this.routes();
        this.apiRoutes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middleware() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(bodyParser.json());
    }
    private apiRoutes(){
        this.app.use('/api',apiRouter);
        this.app.use(express.json());
        this.app.use(bodyParser.json());
    }
  

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}