const fs = require('fs');

const data = fs.readFileSync('./data.txt');
console.log(data.toString(),' Программа для Лены');

setTimeout(()=>{
    console.log('Лена')
}, 100)



setTimeout(()=>{
    console.log('Я тебя очень')
}, 700)
setTimeout(()=>{
    console.log('Ну ооочень')
}, 1200)
setTimeout(()=>{
    console.log('Ну ооочень очень')
}, 1500)

setTimeout(()=>{
    console.log('Прошу сделать мне массаж')
}, 2000)

setTimeout(()=>{
    console.log('Ну и люблю конечно!')
}, 4000)