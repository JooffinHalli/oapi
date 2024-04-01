process.on('uncaughtException', function (e) {
  console.log('uncaughtException', e);
});

var { argv, exit: processExit } = process;
var args = {};
var keys = ['config', 'service'];
var keysLength = keys.length;
keys.toString = () => keys.map(k => `"${k}"`).join(', ');
var exit = (message) => {
  console.log('\x1b[31m%s\x1b[0m', message); // red
  processExit();
}

if (argv.length !== (2 + keysLength)) {
  exit(`Необходимое количество аргументов: ${keysLength} - ${keys}`);
}
var l = argv.length;
for (var i = 0; i < l; i++) {
  if (i < 2) continue;
  var arg = argv[i];
  var parts = arg.split('=');
  var key = parts.shift();
  let isKeyValid = false;
  keys.forEach((k) => {
    if ((arg === k) || (arg === `${k}=`)) {
      exit(`Не указано значение для "${k}"`);
    }
    if (key === k) isKeyValid = true;
  });
  if (!isKeyValid) {
    exit(`Аргумент "${key}" не валидный. Валидные аргументы - ${keys}`);
  }
  var value = parts.join('=');
  args[key] = value;
}

class Process {
  static exit = exit;
  static args = args;
}

module.exports = Process;