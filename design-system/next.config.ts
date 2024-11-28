import { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Ruta del frontend
        destination: "http://54.163.223.205:3002/api/:path*", // Ruta del backend
      },
    ];
  },
};

export default nextConfig;