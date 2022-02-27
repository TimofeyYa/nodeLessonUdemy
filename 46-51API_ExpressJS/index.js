import http from 'http';

const host = '127.0.0.1',
      port = "7400";

const server = http.createServer((req, res) =>{
    if (req.method == 'GET'){
        res.end('Hello!')
    } else {
        res.end('Postman here baby!')
    }
})

server.listen(port, host, ()=>{
    console.log(`Сервер запущен!`)
})