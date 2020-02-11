module.exports = {
  siteMetadata: {
    title: `Amadeo Media - Strony internetowe, sklepy E-commerce, grafika`,
    url: `https://amadeomedia.com`,
    description: `Zajmujemy się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko, sprawdź co mamy w ofercie! Stwórzmy coś razem.`,
    author: `Amadeusz Grzesiak`,
    lang: `PL-pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-140137342-1',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
