const characters = [
    {name: 'Фродо', hasRing: false},
    {name: 'Бильбо', hasRing: false}
];

function stealRing(arr, owner){
    return arr =  arr.map(c=>{
        if (c.name == owner) c.hasRing = true;
        else c.hasRing = false;
    })
}

module.exports = {stealRing, characters};