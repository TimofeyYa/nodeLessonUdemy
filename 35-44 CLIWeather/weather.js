#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { getWather } from "./services/api.service.js";
import { printHelp, printError, printSuccess, printWeather } from "./services/log.service.js";
import { saveKeyValue, saveCityValue, getKeyValue } from "./services/storage.service.js";

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

const saveCity = async (city) =>{
    if (!city.length){
        return printError('Не передан город!')
    }

    try{
        await saveCityValue('city', city);
        printSuccess("Город сохранён!");
    } catch (e){
        printError(e.message);
    }
}

const getWeatherStatus = async () =>{
    try{
        const weather = await getWather(await getKeyValue('city'));
        printWeather(weather);

    } catch(e){
        if (e.response.status == 404){
            printError('Не верно указан город!')
        } else if (e.response.status == 401){
            printError('Передан не верный токен!')
        } else {
            printError(e.message);
        }
    }
}

const initCLI = ()=>{
    
    const args = getArgs(process.argv);
    
    if (args.h){
        return printHelp();
    }

    if (args.s){
        return saveCity(args.s);
    }

    if (args.t){
        return saveToken(args.t);
    }

    //Вывести погоду
    return getWeatherStatus();
    
}

initCLI();