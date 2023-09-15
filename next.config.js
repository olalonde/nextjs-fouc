const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  // optimizeFonts: true,
  // compress: true,
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
};

// module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
// module.exports = withVanillaExtract(nextConfig);
// module.exports = withVanillaExtract(nextConfig);
module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
