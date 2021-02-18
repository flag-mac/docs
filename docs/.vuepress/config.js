const moment = require('moment');

moment.locale('zh-cn');

module.exports = {
  
    title: '乔治 API 接口文档',
    description: '乔治 API 接口文档，稳定免费',
    markdown: {
      lineNumbers: true
    },
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            return moment(timestamp).format('LLLL')
          }
        }
      ]
    ],  
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