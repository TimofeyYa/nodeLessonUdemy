import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";

const getWather = async (city) =>{
    let token;

    if (process.env.TOKEN ){
        token = process.env.TOKEN ;
    } else {
        token = await getKeyValue(TOKEN_DICTIONARY.token)
    }

    if (!token) throw new Error("Не задан ключ API");
    

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })

   
    return data;
    
}

export {getWather};