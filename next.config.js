/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    //distDir: 'build',
  images: {
    domains: ['res.cloudinary.com']
  },
}

module.exports = nextConfig
