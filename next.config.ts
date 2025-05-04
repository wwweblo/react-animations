import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/react-animations",
    assetPrefix: '/react-animations',
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    // чтобы пути к страницам заканчивались слэшем
    trailingSlash: true,
    // отключаем оптимизацию изображений на стороне сервера
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
