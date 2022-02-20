const perf_hooks = require('perf_hooks');


test = perf_hooks.performance.timerify(test);

const performanceObserver = new perf_hooks.PerformanceObserver((items,observer)=>{
    console.log('\nПроводим измерения через perf_hooks : \n',items.getEntries());
    observer.disconnect();
})

performanceObserver.observe({
    entryTypes: ['measure', 'function']
}) //  будет срабатывать каждый раз года встречает measure

function test(){
    const arr1 = [];
    const arr2 = [];
    for (let i = 1; i <= 100000000; i++){
        arr1.push(i*i);
        arr2.push(i/(i+i*2));
        if (i*i < 100000){
            i*i;
        } else {
            i * i + i;
        }
    }
}

function main(){
    performance.mark('start');
    const arr1 = [];
    const arr2 = [];
    for (let i = 1; i <= 100000000; i++){
        arr1.push(i*i);
        arr2.push(i/(i+i*2));
        if (i*i < 100000){
            i*i;
        } else {
            i * i + i;
        }
    }
    
    performance.mark('end');
    performance.measure('timer1', 'start', 'end');
    console.log(performance.getEntriesByName('timer1').pop());// вывод в консоль промежутка timer1
}
main();