/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"],
    // Ou utilisez remotePatterns pour plus de sécurité
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'github.com',
    //     pathname: '/KasarLabs/brand/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
