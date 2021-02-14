module.exports = {
  siteMetadata: {
    siteUrl: `https://www.enginateconsultants.com`,
    title: `Enginate Consultants`,
    description: `We are an innovative and forward thinking Organisation specializing in Civil & Structural Engineering services across all sectors. `,
    author: `Enginate Consultants`,
    keywords: [
      "enginate consultants",
      "enginate",
      "consultants",
      "structural engineers",
      "civil engineers",
      "BIM",
      "consulting",
      "bridge engineers",
      "innovation",
      "CAD",
      "chartered engineers",
      "civil",
      "structural",
      "enginateconsultants.com",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Raleway", "Bebas Neue", "Alatsi", "Roboto Condensed"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway`, `Bebas Neue`, "Alatsi", "Roboto Condensed"],
        display: "swap",
      },
    },
  ],
};
