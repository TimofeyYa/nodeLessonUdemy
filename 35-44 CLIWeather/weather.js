#! usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWather } from "./services/api.service.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) =>{
    if (!token.length){
        return printError("Токен не найден");
    }

    try{
        await saveKeyValue('token', token);
        printSuccess("Токен сохранён!");
    } catch (e){
        printError(e.message);
    }
} 

const initCLI = ()=>{
    const args = getArgs(process.argv);
    
    if (args.h){
        printHelp();
    }

    if (args.s){
        
    }

    if (args.t){
        return saveToken(args.t);
    }
    
    //Вывести погоду

    getWather('moscow');
}

initCLI();