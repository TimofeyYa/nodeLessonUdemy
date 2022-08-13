import express, {Express} from 'express';
import userRouter from './routers/userRoute';
import {Server} from 'http';
import { LoggerService } from './logger/logger.service';

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService;

    constructor(logger : LoggerService){
        this.app = express();
        this.port = 8000;
        this.logger = logger;
    }

    useRoutes(){
        this.app.use('/user', userRouter);
    }

    public async init(){
        console.log(`Сервер!`);
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен!`);
    }
}