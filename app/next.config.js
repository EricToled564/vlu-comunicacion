/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/vlu-comunicacion',
  assetPrefix: '/vlu-comunicacion/'
}

module.exports = nextConfig
