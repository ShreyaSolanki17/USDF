import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "prisma",
    "mongodb",
  ],
  transpilePackages: [".prisma"],
};

export default nextConfig;
