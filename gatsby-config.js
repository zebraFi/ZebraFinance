const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
module.exports = {
  siteMetadata: {
    title: `Zebra Finance`,
    description: `WORLD FIRST ZP DECENTRALISED FINANCE APPLICATION`,
    author: `@superuser`,
    siteUrl: "https://zebrafinance.app/",
    keywords:["Zebra Finance","Token","Defi","bsc","binance","blockchain","decentralised","pancakeswap"]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-B463JTZMQC", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [autoprefixer(), cssnano()],
      },
    },
  ],
}
