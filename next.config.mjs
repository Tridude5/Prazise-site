// next.config.mjs
const repoBase = '/Prazise-site'; // change to '' if you deploy at domain root

/** @type {import('next').NextConfig} */
export default {
  output: 'export',           // generate static site in /out
  basePath: repoBase,         // because site is served from /Prazise-site
  assetPrefix: repoBase + '/', // fix asset URLs under subpath
  images: { unoptimized: true },
  trailingSlash: true,
};
