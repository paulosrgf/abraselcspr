// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para permitir o carregamento de imagens de domínios externos
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // DOMÍNIO DAS IMAGENS DE TESTE
        port: '',
        pathname: '/**', 
      },
      // Adicione aqui outros domínios de imagens se for usar
    ],
  },
};

// Exportamos a configuração usando a sintaxe ES Module
export default nextConfig;