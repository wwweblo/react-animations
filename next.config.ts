import type { NextConfig } from 'next';

// В проде — true, в dev — false
const isProd = process.env.NODE_ENV === 'production';
// Имя вашего репозитория без слэша на конце
const repo = '/react-animations';

const nextConfig: NextConfig = {
    // Подкаталог только в production
    basePath: isProd ? repo : '',
    assetPrefix: isProd ? repo : '',

    // Включаем статический экспорт
    output: 'export',
    reactStrictMode: true,

    // Для SEO и GitHub Pages: все страницы со слэшем
    trailingSlash: true,

    // Чтобы Next.js не пытался оптимизировать изображения на сервере
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
