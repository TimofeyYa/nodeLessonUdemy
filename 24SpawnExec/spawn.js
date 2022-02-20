const {spawn} = require('child_process');

const childProcess = spawn('ls');

childProcess.stdout.on('data', (data)=>{
    console.log('Консоль ответила: ' + data);
})