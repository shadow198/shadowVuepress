
const primarySidebar = [
  { text: 'Our Story', link: '/about/our-story' }
]
module.exports = {
  title: "Shadow Blog", // appended to all page titles
  base: '/shadowVuepress/',
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Html", link: "/html/" },
      { text: "JS", link: "/js/" },
      { text: "CSS", link: "/css/" },
      { text: "Vue", link: "/vue/" },
      { text: "react", link: "/react/" },
      { text: "WordPress", link: "/wordpress/" },
      { text: "English", link: "/english/" },
      { text: "读书笔记", link: "/book/" },
      { text: "开源项目", link: "/open-source/" },
      { text: "About", link: "/about/" },
    ],
    sidebar: {
      '/about/': primarySidebar, // everything in the /about/ subdirectory
      '/contact': primarySidebar, // contact page
      
      // we don't need to do anything to index
      // because the default sidebar is created via page headings
    } 
  },
};
