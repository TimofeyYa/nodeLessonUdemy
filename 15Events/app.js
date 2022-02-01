const EventEmmiter = require('events'); 

const myEmmiter = new EventEmmiter();

const logDBStatus = () =>{
    console.log("DB connected");
}

myEmmiter.addListener('connected', logDBStatus);
myEmmiter.emit('connected');