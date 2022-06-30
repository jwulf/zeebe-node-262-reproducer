const ZB = require('zeebe-node')

const zbc = new ZB.ZBClient();

zbc.topology().then(console.log);

zbc.createWorker({
    taskType: 'NONE',
    taskHandler: job => job.complete()
});