import { LoggerService } from "../logger/logger.service";
import { Router } from "express";
import { IControllerRoute } from "./route.interface";

export abstract class Controller {
    private readonly _router: Router;

    constructor(private logger: LoggerService) {
        
    }

    get router(){
        return this._router;
    }

    protected bindRoutes(routes: IControllerRoute[]){
        for (const route of routes){
             this.logger.log(`[${route.method}] ${route.path}`);
             this.router[route.method](route.path, route.func);
        }
    }
} 