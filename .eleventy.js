module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/images");

  // Add filter to get collection item by file path
  eleventyConfig.addFilter("getCollectionItem", function(collection, path) {
    return collection.find(item => item.filePathStem === path);
  });

  // Add debug filter
  eleventyConfig.addFilter("debug", function(value) {
    return JSON.stringify(value, null, 2);
  });

  // Add collections
  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/products/*.md");
  });

  // Configure directories
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
