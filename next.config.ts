import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@prisma/adapter-libsql",
    "@libsql/client",
    "@libsql/isomorphic-ws",
    "@libsql/isomorphic-fetch",
    "@libsql/hrana-client",
    "@libsql/win32-x64-msvc",
    "libsql",
  ],
};

export default nextConfig;
