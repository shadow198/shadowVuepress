
const primarySidebar = [
  { text: 'Our Story', link: '/about/our-story' }
]
module.exports = {
  title: "Shadow Blog", // appended to all page titles
  description: 'shadow的个人博客, 记录前端的HTML、CSS，JavaScript等知识点， 记录编程心得，学习笔记，有用的工具，读书笔记等',
  head: [
    ['meta', { name: 'keywords', content: 'shadowBlog,shadow Blog, FE, 前端, ChatGPT, Vercel, HTML, CSS,JavaScript, Vue, React' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-codeva-rymI9IKvNP' }]
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "计算机基础",
        items: [
          { text: "操作系统", link: '/basic/os'},
          { text: "计算机组成原理", link: '/basic/computer_organization'},
          { text: "数据库", link: '/basic/database'},
          { text: "计算机网络", link: '/basic/computer_net'},
          { text: "算法", link: '/basic/arithmetic'},
          { text: "数据结构", link: '/basic/data_structure'},
          { text: "设计模式", link: '/basic/design_pattern'},
        ]
      },
      { text: "前端",
        items: [
          { text: "Html", link: '/html/'},
          { text: "Css", link: '/css/'},
          { text: "JavaScript", link: '/js/'},
          { text: "Vue", link: '/vue/'},
          { text: "React", link: '/react/'},
          { text: "Node", link: '/node/'},
          { text: "Electron", link: '/electron/'},
          { text: "uniAPP", link: '/uniAPP/'},
          { text: "数据可视化", link: '/fe/data_visualization'},
          { text: "微信小程序开发", link: "/miniprogram"},
          { text: "微信公众号开发", link: "/fe/offiaccount"},
          { text: "Webpack", link: '/webpack'},
          { text: "安卓开发", link: '/android'},
          { text: "WordPress", link: '/wordpress/'},
          { text: "前端面试", link: '/fe-interview'},
          { text: "前端安全", link: '/security'},
        ] 
      },
      {
        text: '设计',
        items: [
          {text: 'figma', link: '/figma'}
        ]
      },
      {
        text: 'ChatGPT',
        items: [
          {text: '资料', link: '/ChatGPT/index'}
        ]
      },
      {
        text: "运维",
        items: [
          {text: 'Nginx', link: '/ops/nginx'},
          {text: 'Docker', link: '/ops/docker'},
          {text: 'Vercel', link: '/ops/vercel'}
        ]
      },
      { text: "English", link: "/english/" },
      { text: "读书笔记", link: "/book/" },
      { text: "技术导航", link: "/open-source/" },
      { text: "About", link: "/about/" },
    ],
    sidebar: {
      '/about/': primarySidebar, // everything in the /about/ subdirectory
      '/contact': primarySidebar, // contact page
      
      // we don't need to do anything to index
      // because the default sidebar is created via page headings
    },
    repo: 'https://github.com/shadow198/shadowVuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub'
  },
  plugins: {
    siteTitle: (_, $site) => $site.title,
    title: $page => $page.title,
    description: $page => $page.frontmatter.description,
    author: (_, $site) => $site.themeConfig.author,
    tags: $page => $page.frontmatter.tags,
    twitterCard: _ => 'summary_large_image',
    type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
    url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
    image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
    publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
    modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
  },
};
