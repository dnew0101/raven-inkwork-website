import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ], 
    formats: ["image/webp"],
  },
  experimental: {
    scrollRestoration: true,
  },
  webpack(config, { isServer }) {
    if (process.env.ANALYZE === "true") {
      config.plugins.push(new (require("webpack-bundle-analyzer").BundleAnalyzerPlugin)());
    }

    config.plugins.push(
      new (require("webpack").IgnorePlugin)({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      })
    );

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);

export default nextConfig;
