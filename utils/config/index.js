var fs = require('node:fs');
var Process = require('../process');

var serviceFields = [
  'prefix',
  'link',
  'outputPath',
  'tagWhiteList',
  'pathBlackList',
  'fieldBlackList'
];

/** Утилиты для работы с конфигом */
class Config {

  /** Проверяем, правильный ли путь и есть ли по нему файл */
  static assertPath = (path) => {
    var parts = path.split('.');
    var ext = parts[parts.length - 1];
    const isNotJson = !ext || (ext !== 'json');
    if (isNotJson) Process.exit(`В качестве config'a должен быть .json файл`);
    if (!fs.existsSync(path)) Process.exit(`Файл по пути '${path}' не найден`);
  }

  /** Получаем файл */
  static read = (path) => {
    try {
      return require(path);
    }
    catch (e) {
      Process.exit(`Ошибка при чтении json по пути '${path}'`);
    }
  }

  /** Проверяем поля конфига на первом уровне */
  static assert = (config, service, configPath) => {
    if (!config.has(service)) {
      Process.exit(`В конфиге не описан сервис "${service}", проверьте -> ${configPath}`);
    }
    if (!config.has('sourcePath')) {
      Process.exit(`Конфиг не содержит поле "sourcePath", проверьте -> ${configPath}`);
    }
  }

  /** Проверяем проверяем поля сервиса */
  static assertService = (service, configPath) => {
    var l = serviceFields.length;
    for (var i = 0; i < l; i++) {
      var field = serviceFields[i];
      if (!service.has(field)) {
        Process.exit(`Конфиг сервиса не содержит поле "${field}", проверьте -> ${configPath}`);
      }
    }
  }

}

module.exports = Config;