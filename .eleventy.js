module.exports = function (eleventyConfig) {
  // This configuration file is intentionally simple.
  // Eleventy will look for files in the root directory
  // and output them to a `_site` directory by default.

  // You can add more configuration options here as your project grows.
  // For example, to copy static assets like CSS or images:
  eleventyConfig.addPassthroughCopy("images");

  return {
    // When a default layout is not specified,
    // we are telling Eleventy to not use a global layout.
    markdownTemplateEngine: "ejs",
    htmlTemplateEngine: "ejs",
    dataTemplateEngine: "ejs",
  };
};
