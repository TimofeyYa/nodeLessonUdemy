import {Logger} from 'tslog';

export class LoggerService{
    public logger : Logger;

    constructor(){
        this.logger = new Logger({
            displayInstanceName: false,
            displayFunctionName: false,
            displayLoggerName:false,
            displayFilePath:'hidden'
        })
    }

    log(...args: unknown[]){
        this.logger.info(...args);
    }

    error(...args: unknown[]){
        this.logger.error(...args);
    }

    warn(...args: unknown[]){
        this.logger.warn(...args);
    }

    
}