const socket = require('socket.io');
exports.schedule = {
  type: 'all',
  // cron: '0 0 3 * * *',
  interval: '5s',
  // immediate: true,
};

exports.task = async function (ctx) {
  ctx.app.io.emit('socketId', {
    id: process.pid,
    ppid: process.ppid,
    now: Date.now()
  });
};
