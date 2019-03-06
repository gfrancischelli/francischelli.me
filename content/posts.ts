import preval from "preval.macro";

export type PostMeta = {
  path: string;
  title: string;
  length: number;
  published_at: string
};

const articles: Array<PostMeta> = preval`
  module.exports = require('./get-posts.js')();
`;

export default articles
