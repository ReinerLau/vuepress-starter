module.exports = {
  title: "TypeScript4 文档",
  description: "TypeScript4 最新官方文档翻译",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "我的博客",
        items: [
          { text: "Github", link: "https://github.com/ReinerLau" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/307518988892366",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,
        children: [
          {
            title: "学前必读",
            path: "/",
          },
        ],
      },
      {
        title: "基础学习",
        path: "/hanbook/ConditionalTypes",
        collapsable: false,
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
  },
};
