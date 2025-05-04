import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/react-animations",
    output: "export",  // <=== enables static exports
    reactStrictMode: true
};

export default nextConfig;
