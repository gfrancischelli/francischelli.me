const withTypescript = require("@zeit/next-typescript");

const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    hastPlugins: [require("@mapbox/rehype-prism")]
  }
});

module.exports = withTypescript(
  withMDX({
    pageExtensions: ["js", "jsx", "mdx"],
    webpack(config, options) {
      config.module.rules.push({
        test: /.css$/,
        use: "raw-loader"
      });
      return config;
    }
  })
);
