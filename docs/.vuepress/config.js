const headConf = require('./config/headConf');
const plugsConf = require('./config/plugsConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');

module.exports = {

  title: '乔治 API 接口文档',
  description: '乔治 API 接口文档，稳定免费',
  head: headConf,
    markdown: {
  lineNumbers: true
},
plugins: plugsConf,
themeConfig: {
  nav: navConf,
    sidebar: sidebarConf,
      smoothScroll: true,
        lastUpdated: '更新时间',
  }
}