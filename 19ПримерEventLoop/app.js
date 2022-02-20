/* 

Cтруктура Event Loop
- Инициализация (Сразу обработает все линейные вызовы(К примеру, console.log), а также зарегистрирует
таймеры и другие элементы фазы EvenLoop)

## Фазы
-- Таймеры (Проверит готовность таймеров и если они готовы выпонит)
-- Pending callbecks (обработка функций в фазах)
-- idle, prepare
-- poll (Проверяте input output - чтение и создание ифнормации)
-- check (Выполнияется Immediate);
-- close callback
##

-close? (Проверка на окончание)


Promice считывается между каждой фазы Event Loop
Между фазами происходят 
nextTick, microtaskQueue

*/
const fs = require('fs');

console.log('Init');

setTimeout(()=>{
    console.log(performance.now(),' Timer 0');
}, 100)
setImmediate(()=>{
    console.log('Immediate');
})

fs.readFile(__filename, ()=>{
    console.log('File readed!');
})

setTimeout(()=>{
    for(let i = 0; i < 100000000; i++){
        for (let j = 0; j < 70; j++){
            i + i * 2;
        }
    }
    console.log('I done it!')
}, 0);

Promise.resolve().then(()=>{
    console.log('Promice');
})
console.log('Final');