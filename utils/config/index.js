var Process = require('../process');

var serviceFields = ["prefix", "repo", "branch", "file", "output", "ignore"];

/** Утилиты для работы с конфигом */
class Config {

  static assertIsJson = (fileName) => {
    var { 1: ext } = fileName.split('.');
    const isNotJson = !ext || (ext !== 'json');
    if (isNotJson) Process.exit('В качестве "config"\'a должен быть .json файл');
  }

  static assert = (config, service, configDir) => {
    if (!config.has(service)) {
      Process.exit(`В конфиге не описан сервис "${service}", проверьте -> ${configDir}`);
    }
    if (!config.has('source')) {
      Process.exit(`Конфиг не содержит поле "source", проверьте -> ${configDir}`);
    }
  }

  static assertService = (service, configDir) => {
    var l = serviceFields.length;
    for (var i = 0; i < l; i++) {
      var field = serviceFields[i];
      if (!service.has(field)) {
        Process.exit(`Конфиг сервиса не содержит поле "${field}", проверьте -> ${configDir}`);
      }
    }
  }

}

module.exports = Config;