import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getWather = async (city) =>{
    const token = await getKeyValue(TOKEN_DICTIONARY.token);

    if (!token) throw new Error("Не задан ключ API");

    const url = new URL('https://api.openweathermap.org/data/2.5/weather');

    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);
    url.searchParams.append('lang', "ru");
    url.searchParams.append('units', "metric");

    https.get(url, response =>{
        let res = ''; 

        response.on('data', (chank)=>{
            res += chank;
        });

        response.on('end', ()=>{
            console.log(res);
            return res;
        })

        response.on('error', (e)=>{
            throw new Error(e);
        })

    })
    
}

export {getWather};