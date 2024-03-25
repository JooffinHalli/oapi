var { Config, FS } = require('../../../utils');

/**
  @does создает файл index.ts для импортов
*/
var buildIndexJs = () => {

  FS.writeFile(
    `${Config.serviceOutput}/index.ts`,
    `export * from './config';
export * from './endpoints';
export * from './paths';`,
  );

}

module.exports = buildIndexJs;