Queue
=====

定时执行程序

```
// 定义 Job
module.exports = {
    name: 'Job Name',    // 非必需
    time: '* * * * * *', // 秒 分 时 日 月 周
    init: function() {
        // init your job
    },
    tick: function() {
        // do something...
    }
}
```

queue.js 中注册 Job
```
// 定义 Job 存放的路径
job.basePath = 'xxx';
// 注册路径下文件名为 job.js 的 Job
job.register('job');
```

```
cd lib
ln -s ../../base base
```
