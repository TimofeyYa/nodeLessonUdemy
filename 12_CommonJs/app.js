const {characters, stealRing} = require('./characters.js');

let data = characters;
console.log(stealRing(characters, 'Фродо'));
console.log(data, "\n");
for (const c of data){
    console.log(c);
}


