module.exports = [
  {
    title: '随机一言',   // 必要的
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2,    // 可选的, 默认值是 1
    children: [
      '/api/v1',
    ]
  },
  {
    title: '随机动漫',   // 必要的
    collapsable: false,
    sidebarDepth: 2,    // 可选的, 默认值是 1
    children: [
      '/api/wallpaper'
    ],
    initialOpenGroupIndex: -1
  },
  {
    title: '网易云',   // 必要的
    collapsable: false,
    sidebarDepth: 2,    // 可选的, 默认值是 1
    children: [
      '/api/netease',
      '/api/netease_wall'
    ],
    initialOpenGroupIndex: -1
  },
  {
    title: 'QQ头像',   // 必要的
    collapsable: false,
    sidebarDepth: 2,    // 可选的, 默认值是 1
    children: [
      '/api/portrait'
    ],
    initialOpenGroupIndex: -1
  },
  {
    title: '主题文件',   // 必要的
    collapsable: false,
    sidebarDepth: 2,    // 可选的, 默认值是 1
    children: [
      '/static/Cuteen',
      '/static/Handsome'
    ],
    initialOpenGroupIndex: -1
  },
  {
    title: 'H5 播放器',   // 必要的
    collapsable: false,
    sidebarDepth: 2,    // 可选的, 默认值是 1
    children: [
      '/api/Player'
    ],
    initialOpenGroupIndex: -1
  },
  {
    title: 'Github 加速',   // 必要的
    collapsable: false,
    sidebarDepth: 2,    // 可选的, 默认值是 1
    children: [
      '/static/Github'
    ],
    initialOpenGroupIndex: -1
  },
]