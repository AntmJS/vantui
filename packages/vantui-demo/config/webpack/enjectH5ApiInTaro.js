// Taro不支持改编译中文件的插件HOOK，先用loader解决
module.exports = function () {
  return `
  import taro from './api/taro';
  import * as h5 from './api/index';

  export * from './api/index';
  export * from './api/taro';
  for (const key in h5) {
    taro[key] = h5[key]
  }
  export default taro;
  `
}
