/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["source.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
