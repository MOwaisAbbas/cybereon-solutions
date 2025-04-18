import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable eslint during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Skips type checking during the build
  },
};

export default nextConfig;
