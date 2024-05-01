/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",

  // Necessary to use <Image /> and output: 'export' at the same time
  images: { unoptimized: true },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
