const perf_hooks = require('perf_hooks');

const {fork} = require('child_process');
const {Worker} = require('worker_threads');

const performanceObserver = new perf_hooks.PerformanceObserver((items,observer) =>{
	console.log(items.getEntries());
	
})

performanceObserver.observe({
	entryTypes:['measure']
})

const workerFunc = (array) =>{
	return new Promise((resolve, reject)=>{
		performance.mark('startWorker');

		const worker = new Worker('./worker.js', {
			workerData:{
				array
			}
		})

		worker.on('message', (msg)=>{
			console.log(`Воркер отворкал ${msg}`)
			performance.mark('endFork');
			performance.measure('Worker End', 'startWorker', 'endFork');
			resolve(msg);
		})
	})
}

const forkFunc = (array) =>{
	return new Promise ((resolve, reject) =>{
		performance.mark('startFork');

		const forkProcess = fork('./fork.js');

		forkProcess.on('message', (msg) =>{
			console.log(`Результат работы программы\n${msg}`);
			performance.mark('endFork');
			performance.measure('Fork Timer', 'startFork', 'endFork');
		})

		forkProcess.on('close', (code)=>{
			resolve();
		})

		forkProcess.send({array});
	})
}


const main = async ()=>{
	await forkFunc([12,13,42,14,32,15,31,21,43,44]);
	await workerFunc([12,13,42,14,32,15,31,21,43,44]);
}

main();