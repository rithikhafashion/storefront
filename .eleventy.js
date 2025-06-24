module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/products/*.md");
  });


  return {
    dir: {
      input: "src",
      output: "output"
    }
  };
};
