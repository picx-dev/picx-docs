export default {
  lang: 'zh-CN',
  title: 'PicX 图床',
  description: '基于 GitHub API & jsDelivr 开发的具有 CDN 加速功能的图床工具',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],

  themeConfig: {
    smoothScroll: true,
    repo: 'XPoet/picx',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: false,
    editLinkText: '在 GitHub 编辑此页',
    lastUpdated: '最近更新',

    nav:[
      { text: 'PicX 官网', link: 'https://picx.xpoet.cn' },
    ],

    sidebar: {
      '/tutorial/': [
        { text: '快速开始', link: '/tutorial/get-start' },
        { text: '图床配置', link: '/tutorial/config' },
        { text: '上传图片', link: '/tutorial/upload' },
        { text: '图床管理', link: '/tutorial/management' },
        { text: '我的设置', link: '/tutorial/settings' },
        { text: '贡献指南', link: '/tutorial/contribution' },
      ]
    }
  }
}

