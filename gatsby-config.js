module.exports = {
  siteMetadata: {
    title: `Enginate Consultants`,
    description: `Enginate Consultants`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
  ],
};
