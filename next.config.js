const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
};

// module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
// module.exports = withVanillaExtract(nextConfig);
// module.exports = withVanillaExtract(nextConfig);
module.exports = nextConfig;
