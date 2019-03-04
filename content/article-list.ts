import preval from "preval.macro";

export type ArticleMeta = {
  path: string;
  title: string;
  length: string;
  published_at: string
};

const articles: Array<ArticleMeta> = preval`
  module.exports = require('./build-content-list.js')();
`;

export default articles
