const { fork } = require('child_process');

const forkProcess = fork('./fork.js');

forkProcess.on('message', (msg)=>{
    setTimeout(() => {
        console.log(`Ответ получен: ${msg}`);
        forkProcess.send('close');
    }, 1000);
    
});

forkProcess.on('close', ()=>{
    console.log('Канал закрыт!');
})

forkProcess.send('Ping');