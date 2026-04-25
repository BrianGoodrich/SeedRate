import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // Required for GitHub Pages
  basePath: '/your-repository-name', 
  assetPrefix: '/your-repository-name/', 
  images: { unoptimized: true },
};

export default nextConfig;
