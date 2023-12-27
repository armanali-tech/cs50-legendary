/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";
// for those who using CDN
// Use the CDN in production and localhost for development.

const options = {
  buildId: "00189",
  dev: true,
  isServer: true,
  nextRuntime: "nodejs",
  defaultLoaders: { babel: "babel-loader" },
  assetPrefix: isProd ? "https://www.armanali.tech" : "",
};

module.exports = {
  /* config options here */
  // swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arman-ali.s3.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "armanali.tech",
        pathname: "**",
      },
    ],
  },

  webpack: (config, { isServer }) => {
    // config.resolve.alias.canvas = false;
    config.resolve.fallback = { fs: false, path: false };
    config.output.publicPath = `${options.assetPrefix}${config.output.publicPath}`;
    if (!isServer) {
      // config.node = { fs: "empty" };
      config.devtool = "source-map";
    }
    return config;
  },
};
