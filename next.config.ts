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
};

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
});

export default nextConfig;
