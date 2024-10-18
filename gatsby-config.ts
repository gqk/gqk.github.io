import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Qiankun Gao (高乾坤)`,
    navItems: [
      { text: "News", href: "#news" },
      { text: "Publications", href: "#publications" },
    ],
    siteUrl: `https://gqk.me`,
    profile: {
      name: "Qiankun Gao (高乾坤)",
      role: "Ph.D. Student", // 替代 title
      affiliation: "Peking University (北京大学)",
      email: "gqk#stu.pku.edu.cn",
      socialLinks: [
        { icon: "FaEnvelope", url: "mailto:gqk#stu.pku.edu.cn" },
        { icon: "FaGoogle", url: "https://scholar.google.com/citations?user=fp1qIhgAAAAJ" },
        { icon: "SiDblp", url: "https://dblp.org/pid/317/1069.html" },
        { icon: "FaGithub", url: "https://github.com/gqk" },
      ],
      avatar: "/images/avatar.jpg",
      authorName: "Qiankun Gao",
    }
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`, // 确保这里指向你存放图片的目录
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `publications`,
        path: `${__dirname}/src/content/publications`,
      },
    },
  ],
}

export default config