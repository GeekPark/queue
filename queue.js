var path = require('path'),
    base = require('./lib/base'),
    job = require('./lib/job');

base.mongo.connect(base.config.mongo, function(err) {
    if(err) {
        console.error(err);
        process.exit(0);
    } else {
        start();
    }
});

function start() {
    console.log('========================');
    console.log('|-.-|  ~  QUEUE ~  |-.-|');
    console.log('========================');

    // config job base path
    job.basePath = path.join(__dirname, 'jobs');

    // register jobs
    job.register('mongobackup');

    //job.tick('mongobackup');

    //Job.showInfo();

    /*
    setTimeout(function() {
        Job.stopAll();
    }, 30000);
    */
}
