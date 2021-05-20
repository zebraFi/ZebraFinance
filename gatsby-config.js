const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
module.exports = {
  siteMetadata: {
    title: `Zebra Finance`,
    description: `Zebra Finance`,
    author: `@superuser`,
    siteUrl: "https://missionmilk.in/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zebra Finance`,
        short_name: `ZebraFi`,
        start_url: `/`,
        background_color: `#f6f7f2`,
        theme_color: `#f6f7f2`,
        display: `minimal-ui`,
        icon: `static/Logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [autoprefixer(), cssnano()],
      },
    },
  ],
}
