const {exec} = require('child_process');

const childProcess1 = exec('ls /home', (error,stdout,stderr) =>{
    if (error) console.error(error);

    console.log('STDOUT:\n' + stdout);
    console.log('STDERR:\n' + stderr);

});


childProcess1.on('exit', (code)=>{
    console.log(`Я вышел с кодом ${code}`);
})