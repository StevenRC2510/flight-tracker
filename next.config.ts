import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    AVIATION_STACK_API: process.env.AVIATION_STACK_API,
    AVIATION_STACK_KEY: process.env.AVIATION_STACK_KEY,
  },
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
