const fs = require("fs");
const path = require("path");
const mdx = require("@mdx-js/mdx");
const babel = require("@babel/core");

const DIR = "pages/thoughts";
const POSTS_DIR = path.resolve(__dirname, "..", DIR);

const validateExtension = file => file.endsWith(".md") || file.endsWith(".mdx");

function requireFromStringSync(src, file_name) {
  const Module = module.constructor;
  const m = new Module();
  src = src.replace(
    `var _Post = _interopRequireDefault(require("../../components/Post"));`,
    `var _Post = ({children}) => React.createElement("div", {}, children);`
  );

  code = `const React = require('../node_modules/react');
  ${src}
  `;

  m._compile(code, file_name);
  return m.exports;
}

function babelTransform(content) {
  const babelOptions = babel.loadOptions({
    babelrc: false,
    presets: ["@babel/preset-react"],
    plugins: ["@babel/plugin-transform-modules-commonjs"]
  });
  return babel.transformSync(content, babelOptions).code;
}

function requireModule(file_name) {
  const file_path = path.join(POSTS_DIR, file_name);
  const src = fs.readFileSync(file_path, { encoding: "utf-8" });
  const mod = requireFromStringSync(babelTransform(mdx.sync(src)), file_name);
  return mod;
}

function getMeta(file_name) {
  const { meta } = requireModule(file_name);
  const name = file_name.slice(0, -".mdx".length);
  const path = `/thoughts/${name}`;
  return { ...meta, path };
}

module.exports = () =>
  fs
    .readdirSync(POSTS_DIR)
    .filter(validateExtension)
    .map(getMeta);

fs.readdirSync(POSTS_DIR)
  .filter(validateExtension)
  .map(getMeta);
