var now = 0, before;
function showTime(msg) {
    if(now === 0) {
        now = +new Date();
    }
    before = now;
    now = +new Date();
    console.log('[ %s ] %dms', msg || '-', now - before);
}

module.exports = {
    showTime: showTime,
}
