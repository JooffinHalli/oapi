var child_process = require('node:child_process');
var fs = require('node:fs');
var Process = require('../process');

/** Утилиты для работы с гитом */
class Git {

  /** Проверяет, является ли строка валидной ссылкой для `git clone` */
  static assertLink = (link) => {
    if (!link) {
      Process.exit('укажите ссылку на репозиторий для git clone');
    }
    if (!link.startsWith('http') || !link.endsWith('.git')) {
      Process.exit('укажите корректную ссылку на репозиторий для git clone');
    }
  }

  /** Получить имя репозитория из ссылки для клонирования */
  static getRepoName = (repoLink) => {
    const linkParts = repoLink.split('.');
    const path = linkParts[linkParts.length - 2];
    const pathParts = path.split('/');
    const repoName = pathParts[pathParts.length - 1];
    return repoName;
  }

  /** Клонировать репозиторий */
  static clone = (link, branch) => {
    try {
      child_process.execSync(`git clone --branch=${branch} --depth=1 --no-tags ${link}`);
    }
    catch (e) {
      Process.exit('Ошибка во время клонирования репозитория', e);
    }
  }

  /** Убедиться, что репозиторий клонировался и файлы создались */
  static assertClonning = (path, file) => {
    // path = process.cwd() + `/${path}`;
    if (!fs.existsSync(path)) {
      Process.exit('Репозиторий склонировался с ошибкой или не склонировался вообще');
    }
    if (!fs.existsSync(`${path}/${file}`)) {
      Process.exit(`Репозиторий склонировался, но там нет ${file} файла`);
    }
  }

}

module.exports = Git;