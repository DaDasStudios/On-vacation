/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: ".env"
})

module.exports = {
  siteMetadata: {
    title: `Página principal`,
    description: "Reserva tu viaje con On Vacation ahora y no te pierdas de todas nuestras ofertas semanales. Encontrarás destinos nacionales e internacionales en excelentes hoteles.",
    siteUrl: `https://on-vacation.vercel.app`,
    adviserUrl: "https://w.app/MO8LbK",
    adviserPhone: "315 551 2316",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
