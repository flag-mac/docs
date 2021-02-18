module.exports = {
    base: '/docs/',
    themeConfig: {
      logo: 'https://img.fddmao.com/2021/02/18/5ee0244f312454e6ecfee95efc243af6.png',
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