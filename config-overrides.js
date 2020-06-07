// 此配置文件通过customize-cra包来简化配置操作
const { override, addDecoratorsLegacy } = require('customize-cra')

module.exports = override(
  //注意此功能需要额外的插件，看官网
  addDecoratorsLegacy()
)