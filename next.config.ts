import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable eslint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
