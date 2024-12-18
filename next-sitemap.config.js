// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://devbysushil.com",
  generateRobotsTxt: true,
  sitemapSize: 1, // Since it's a single-page app
  exclude: ["/404"], // Exclude error pages if any
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
