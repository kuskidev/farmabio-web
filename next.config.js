/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'localhost']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
