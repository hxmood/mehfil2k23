/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponents: true,
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: '/api/:path*',
      has: [
        {
          type: 'header',
          key: 'Cache-Control',
          value: 'no-cache',
        },
      ],
    },
  ],
}


module.exports = nextConfig
