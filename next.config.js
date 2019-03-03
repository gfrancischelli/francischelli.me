const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript();

// next.config.js
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
});

module.exports = withTypescript(
  withMDX({
    pageExtensions: ["js", "jsx", "mdx"]
  })
);
