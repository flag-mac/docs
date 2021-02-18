const moment = require('moment');

moment.locale('zh-cn');

module.exports = {

  title: '乔治 API 接口文档',
  description: '乔治 API 接口文档，稳定免费',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon_32.ico' }],
    ['link', { rel: 'icon', href: '/assets/img/favicon_48.ico' }],
    ['link', { rel: 'icon', href: '/assets/img/favicon_64.ico' }],
    ['link', { rel: 'icon', href: '/assets/img/favicon_128.ico' }],
    ['meta', { name: 'author', content: '乔治 API 接口文档' }],
    ['meta', { name: 'author', content: '乔治 API 接口文档，随机一言，随机动漫' }]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: {
    '@vuepress/last-updated' : {
      transformer: (timestamp, lang) => moment(timestamp).format('LLLL')
    }, 
    '@vuepress/back-to-top' : true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '白名单', link: 'https://www.flagg.cn/examine.html' },
    ],
    sidebar: [
      '/api/v1',
      '/api/wallpaper'
    ],
    smoothScroll: true,
    lastUpdated: '更新时间',
  }
}