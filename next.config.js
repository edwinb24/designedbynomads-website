/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io'],
  },
}

const webpack = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}

module.exports = nextConfig
