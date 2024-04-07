var fs = require('node:fs');
var Process = require('../process');

class FS {

  static banner = `/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/\n\n`;

  /** безопасно удалить папку */
  static rmDirSafe = (dir) => {
    try {
      if (!fs.existsSync(dir)) return;
      fs.rmSync(dir, { recursive: true, force: true });
    }
    catch(е) {
      console.error(e);
      Process.exit(`Ошибка при удалении папки ${dir}`);
    }
  }

  static rmDir = (path) => {
    fs.rm(path, { recursive: true, force: true }, () => {});
  }

  /** безопасно создает дерикторию */
  static mkDir = (path) => {
    try {
      if (fs.existsSync(path)) return;
      fs.mkdirSync(path);
    }
    catch(е) {
      Process.exit(`Ошибка при создании папки ${path}`);
    }
  }
  
  static writeFile = function(path, data, withBanner = true) {
    fs.promises.writeFile(path, `/* eslint-disable */\n\n${withBanner ? this.banner : ''}${data}`, null);
  }

  static readFileSync = fs.readFileSync;

  static isJsonFile = () => {
    try {
      const stats = fs.statSync('/Users/joe/test.txt');
    }
    catch (e) {
      Process.exit(`Ошибка при создании папки ${path}`);
    }
  }
  
}

module.exports = FS;