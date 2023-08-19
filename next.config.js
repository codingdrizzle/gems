/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'export',
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
