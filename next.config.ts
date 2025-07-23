import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export
 output: "export",
 trailingSlash: true,
 images: {
  unoptimized: true,
 },

  // Optional: Disable image optimization (required for static export)
};

export default nextConfig;



