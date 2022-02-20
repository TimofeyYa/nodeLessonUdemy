process.on('message', (msg)=>{
        if (msg == 'close'){
            process.disconnect();
            return;
        }
        console.log(`Принял: ${msg}`);

        process.send('Pong');
  
})