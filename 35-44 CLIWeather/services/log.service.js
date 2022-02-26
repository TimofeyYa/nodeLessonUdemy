import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error)=>{
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

const printSuccess = (msg) =>{
    console.log(chalk.bgGreen(" Success! ") + ' ' + msg);
}

const printHelp = ()=>{
    console.log(dedent`
    
    ${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -s [SITY] для установки города
    -h вывод помощи
    -t [API_KEY] для сохранения токена

    `)
}


const printWeather = (data) =>{

    if (process.env.TYPE !=1){
    console.log(dedent`
    
    ${chalk.bold(chalk.yellow('Погода в городе '))}${chalk.bold(chalk.yellow(data.name))}

    Температура воздуха: ${chalk.bold(data.main.temp)}
    Ощущается как: ${chalk.bold(data.main.feels_like)}
    Описание: ${chalk.bold(data.weather[0].description)}

    `)
    } else {
        console.log(data);
    }
}
export {printError, printSuccess, printHelp, printWeather};