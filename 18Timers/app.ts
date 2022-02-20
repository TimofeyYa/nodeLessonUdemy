let startTime = performance.now();

setTimeout(()=>{
    console.log('Я родился!');
    console.log(performance.now() - startTime);
    startTime = performance.now();

    console.log('\n---Next---\n');
    const interval = setInterval(()=>{
        console.log(`C с момента работы прошло ${performance.now() - startTime}`);
    }, 1500);

    setTimeout(()=>{
        console.log('Остановите этот бред!!!');
        clearInterval(interval);

        console.log('\n---Next---\n');
        console.log('Я жду когда ты выполнишся!');
        setImmediate(()=>{
            console.log('Как обычно последним, ничего нового!');



            setTimeout(()=>{
                console.log('\n---Next---\n');
                console.log('Признай что ты плохая программа!');
                const timeOut = setTimeout(()=>{
                    console.log('Я плохая программа!');
                }, 2000)

                setTimeout(()=>{
                    clearTimeout(timeOut);
                }, 1000)
            }, 1000)
        });
        console.log('Ты когда уже выполнишься?');


    }, 6000);

    
}, 1000)

