export default {
  siteMetadata: {
    header: `Radio Lanza`,
    title: `Radio Lanza | Un podcast que te ayudará a lanzarte`,
    description: `Queremos animarte a crear tu producto y vamos a ser tus mentores en este
    camino. Ya sea montar una startup, o abrir un restaurante, te ayudamos
    a lanzarte.`,
    image: `content/assets/meta.png`,
    siteUrl: `https://www.radiolanza.com`,
    author: {
      name: `Jimmy Flores & Marc Collado`,
    },
    language: `es`,
    social: {
      twitter: `https://twitter.com/Radio_Lanza`,
      email: `hola@radiolanza.com`,
    },
  },
  plugins: [
    // FILESYSTEM
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    // MARKDOWN
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    // IMAGES & ASSETS
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // https://github.com/mottox2/gatsby-source-rss-feed
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://media.rss.com/safareig/feed.xml`,
        name: `SafareigFm`,
        // https://github.com/bobby-brennan/rss-parser#readme
        // parserOption: {
        //   customFields: {
        //     item: ['itunes:order'],
        //   },
        // },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // OFFLINE
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radio Lanza | Un podcast que te ayudará a lanzarte`,
        short_name: `Radio Lanza`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#2DC5FA`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    // UTILS & HELPERS
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
  ],
};
