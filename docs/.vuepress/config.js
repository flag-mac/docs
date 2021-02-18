module.exports = {
    base: '/docs/',
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