// next.config.mjs
const repoBase = '/Prazise-site'; // '' if deploying at domain root

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath: repoBase,
  images: { unoptimized: true },   // required for static export
  trailingSlash: true,
};
