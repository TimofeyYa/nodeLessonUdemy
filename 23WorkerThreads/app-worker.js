const {Worker} = require('worker_threads')

process.env.UV_THREADPOOL_SIZE=8;

const compute = (array) =>{
    return new Promise((resolve, reject)=>{
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            }
        })

        worker.on('message', (msg)=>{
            resolve(msg);
        })

        worker.on('error', (err)=>{
            reject(err);
        })

        worker.on('exit', ()=>{
            console.log("end")
        })
    })
}

const main = async () => {
    performance.mark('start');

    const result = await Promise.all([
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42]),
        compute([25,32,12,14,42])
    ]);

    performance.mark('end');
    performance.measure('time', 'start', 'end');

    console.log(performance.getEntriesByName('time').pop());
}

main()