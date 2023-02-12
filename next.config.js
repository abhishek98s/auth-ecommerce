/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: "i.dummyjson.com",
        pathname: '/data/**',
      },
      {
        protocol: 'https',
        hostname: "api.escuelajs.co",
        pathname: '/api/v1/products/**',
      },
      {
        protocol: 'https',
        hostname: "cdn.lorem.space",
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig