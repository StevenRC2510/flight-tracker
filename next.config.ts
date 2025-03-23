import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.optimization.runtimeChunk = true;
    }
    return config;
  },
};

export default nextConfig;
