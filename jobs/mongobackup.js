var base  = require('../lib/base'),
    child = require('child_process'),
    path  = require('path');

module.exports = {
    name: 'Mongo Backup',
    time: '0 0 0 * * *',
    tick: backup
}

function backup() {
    var dbs = 'geekcf'.split(','),
        date = new Date().getDate().toString(),
        basepath = '~/mongobak',
        filename = path.join(basepath, date);

    console.log(filename);

    child.exec([
        'export', 'LC_ALL="en_US.UTF-8"'
    ].join(' '), function(error, stdout, stderr) {
        if(error) {
            console.log('exports', error);
        }
        dbs.forEach(function(db) {
            // backup
            child.exec([
                'mongodump', '-d', db, '-o', filename
            ].join(' '), function(error, stdout, stderr) {
                if(error) {
                    console.log('backup', error);
                } else {
                    console.log('%s backup success.', db);
                }
                // change create time
                child.exec([
                    'touch', '-r', path.join(filename, db, '*'), filename
                ].join(' '), function(error, stdout, stderr) {
                    if(error) {
                        console.log('change', error);
                    } else {
                        console.log('%s change success.', filename);
                    }
                });
            });
        });
    });
}
