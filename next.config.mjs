// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 🚨 BLOCO DE IMAGENS ATUALIZADO
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
            },
        ],
    },
};

export default nextConfig;