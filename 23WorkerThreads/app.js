const factorial = require("./factorial");


const compute = (array) =>{
    const arr =[];
    for (let i = 0; i < 100000000; i++){
        arr.push(i*i+i);
    }

    return array.map(el =>{
        factorial(el);
    })
}


const main =  () => {
    performance.mark('start');

    const result = [
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42])
    ]

    performance.mark('end');
    performance.measure('time', 'start', 'end');

    console.log(performance.getEntriesByName('time').pop());
}

main()