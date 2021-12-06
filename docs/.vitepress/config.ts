export default {
  lang: 'zh-CN',
  title: 'PicX 图床',
  description: '基于 GitHub API & jsDelivr 开发的具有 CDN 加速功能的图床工具',

  themeConfig: {
    repo: 'picx-dev/picx-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 编辑此页',
    lastUpdated: '最近更新',

    sidebar: {
      '/guide/': [
        {text: 'step1', link: '/guide/step1'},
        {text: 'step2', link: '/guide/step2'},
        {text: 'step3', link: '/guide/step3'},
      ]
    }
  }
}

